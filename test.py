# ==============================================================
# SHA-256 Collision Experiment using cryptography library (manual update style)
# ==============================================================
# Author: Yonatan Haddish
# Date: October 2025
# Fixed random seed: 2025
# ==============================================================

import random
from cryptography.hazmat.primitives import hashes

# --------------------------------------------------------------
# Prime and Composite Generation
# --------------------------------------------------------------

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

random.seed(2025)

primes = [x for x in range(2, 256) if is_prime(x)]
composites = [x for x in range(4, 256) if not is_prime(x)]

# --------------------------------------------------------------
# Step 1: Generate Prime Sets and Digests
# --------------------------------------------------------------

prime_sets = []
prime_digests = []

for _ in range(16):
    pset = sorted(random.sample(primes, 3))
    digest = hashes.Hash(hashes.SHA256())
    for p in pset:
        digest.update(str(p).encode("ascii"))
    prime_sets.append(pset)
    prime_digests.append(digest.finalize().hex())

# --------------------------------------------------------------
# Step 2: Composite Sets and Collision Check
# --------------------------------------------------------------

composite_attempts = []
collision_found = False
collision_info = None

for attempt in range(1, 1001):
    cset = sorted(random.sample(composites, 3))
    digest = hashes.Hash(hashes.SHA256())
    for c in cset:
        digest.update(str(c).encode("ascii"))
    chash = digest.finalize().hex()

    if len(composite_attempts) < 10:
        composite_attempts.append((attempt, cset, chash))

    if chash in prime_digests:
        collision_found = True
        collision_info = (attempt, cset, chash)
        break

# --------------------------------------------------------------
# Step 3: Output Results (as Comments)
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
for attempt, cset, chash in composite_attempts:
    print(f"# {attempt:3}: {cset} → {chash}")

print("\n# Final Result:")
print("--------------------------------------------------------------")
if collision_found:
    attempt, cset, chash = collision_info
    print(f"# Collision FOUND after {attempt} attempts!")
    print(f"# Matching Composite Set: {cset} → {chash}")
else:
    print("# No collision found in 1,000 composite attempts.")

# --------------------------------------------------------------
# Explanation
# --------------------------------------------------------------
"""
==============================================================
EXPLANATION
==============================================================
SHA-256 produces a 256-bit digest. Even tiny changes in input yield completely different outputs.
This experiment manually feeds ASCII decimal strings into the hash function using digest.update().

According to the birthday paradox, you'd need about 2^128 inputs to expect a collision in SHA-256.
Since we only tried 1,000 composite sets, the chance of a collision is effectively zero — and none occurred.
==============================================================
"""
