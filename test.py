# ==============================================================
# SHA-256 Collision Experiment using cryptography library
# ==============================================================
# Author: Yonatan Haddish
# Date: October 2025
# Fixed random seed: 2025
# ==============================================================

import random
from cryptography.hazmat.primitives import hashes

# --------------------------------------------------------------
# Helper Functions
# --------------------------------------------------------------

def is_prime(n):
    """Return True if n is a prime number."""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def sha256_digest(numbers):
    """
    Compute SHA-256 digest of the ASCII decimal concatenation of a list of integers.
    E.g., [251, 157, 191] → b"251157191"
    """
    data = b''.join(str(n).encode('ascii') for n in numbers)
    digest = hashes.Hash(hashes.SHA256())
    digest.update(data)
    return digest.finalize().hex()

# --------------------------------------------------------------
# 1. Generate SHA-256 digests of prime sets
# --------------------------------------------------------------

SEED = 2025
random.seed(SEED)

# Generate all primes and composites < 256
primes = [x for x in range(2, 256) if is_prime(x)]
composites = [x for x in range(4, 256) if not is_prime(x)]

# Generate 16 random prime sets and compute their digests
prime_sets = []
prime_digests = []

for _ in range(16):
    pset = sorted(random.sample(primes, 3))
    digest = sha256_digest(pset)
    prime_sets.append(pset)
    prime_digests.append(digest)

# --------------------------------------------------------------
# 2. Generate SHA-256 digests of composite sets
# --------------------------------------------------------------

collision_found = False
collision_info = None
composite_attempts = []

for attempt in range(1, 1001):
    cset = sorted(random.sample(composites, 3))
    digest = sha256_digest(cset)

    if len(composite_attempts) < 10:
        composite_attempts.append((attempt, cset, digest))

    if digest in prime_digests:
        collision_found = True
        collision_info = (attempt, cset, digest)
        break

# --------------------------------------------------------------
# 3. Output Results (as Comments)
# --------------------------------------------------------------

"""
==============================================================
RESULTS
==============================================================
Fixed random seed: 2025

16 Prime Sets and Their SHA-256 Digests:
--------------------------------------------------------------
"""

for i, (pset, digest) in enumerate(zip(prime_sets, prime_digests), 1):
    print(f"# {i:2}: {pset} → {digest}")

print("\n# First 10 Composite Attempts:")
print("--------------------------------------------------------------")
for attempt, cset, digest in composite_attempts:
    print(f"# {attempt:3}: {cset} → {digest}")

print("\n# Final Result:")
print("--------------------------------------------------------------")
if collision_found:
    attempt, cset, digest = collision_info
    print(f"# Collision FOUND after {attempt} attempts!")
    print(f"# Matching Composite Set: {cset} → {digest}")
else:
    print("# No collision found in 1,000 composite attempts.")

# --------------------------------------------------------------
# 4. Explanation
# --------------------------------------------------------------
"""
==============================================================
EXPLANATION
==============================================================
SHA-256 is a cryptographic hash function that produces a 256-bit digest. Its design ensures that even a tiny change in input results in a completely different hash, and that finding two distinct inputs with the same hash (a collision) is computationally infeasible.

This relates to the birthday paradox: to have a 50% chance of a collision in an n-bit hash, you need about 2^(n/2) samples. For SHA-256, that’s 2^128 — an astronomically large number.

Since this experiment only generated 1,000 composite sets, it’s expected (and confirmed) that no collision occurred. This demonstrates the strength of SHA-256’s collision resistance in practice.
==============================================================
"""
