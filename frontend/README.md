<!-- CREATE TABLE van_driver (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone_number VARCHAR(20),
  password_hash TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending / approved / rejected
  driving_license VARCHAR(50) DEFAULT 'pending', -- pending / approved / rejected
  home_address VARCHAR(50),
  apt_number VARCHAR(50),
  city VARCHAR(50),
  country VARCHAR(50),
  postal_code VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -->

<!-- CREATE TABLE van (
  id SERIAL PRIMARY KEY,
  van_driver_id INTEGER REFERENCES van_driver(id),
  license_plate VARCHAR(50) NOT NULL,
  make VARCHAR(100),
  model VARCHAR(100),
  year INTEGER,
  capacity_kg INTEGER,
  vehicle_inspection VARCHAR(20) DEFAULT 'pending',
  insurance_valid_until DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -->

<!-- CREATE TABLE load_owner (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  phone_number VARCHAR(20),
  company_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -->

<!-- CREATE TABLE job (
  id SERIAL PRIMARY KEY,
  load_owner_id INTEGER REFERENCES load_owner(id),
  pickup_address TEXT NOT NULL,
  dropoff_address TEXT NOT NULL,
  pickup_date TIMESTAMP NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  description TEXT,
  weight INTEGER, -- in kg
  price NUMERIC DEFAULT 0,
  status VARCHAR(50) DEFAULT 'pending', -- pending / accepted / completed / cancelled
  accepted_by_id INTEGER REFERENCES van_driver(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -->
<!--

<!-- CREATE TABLE job_assignment (
CREATE TABLE job_assignment (
  id SERIAL PRIMARY KEY,
  job_id INTEGER UNIQUE NOT NULL REFERENCES job(id),
  van_driver_id INTEGER NULL,
  load_owner_id INTEGER NULL REFERENCES load_owner(id),
  status TEXT DEFAULT 'pending',
  assigned_at TIMESTAMP NULL,
  updated_at TIMESTAMP DEFAULT NOW()
); -->

<!-- CREATE TABLE payment (
  id SERIAL PRIMARY KEY,
  job_id INTEGER REFERENCES job(id),
  amount NUMERIC NOT NULL,
  platform_fee NUMERIC NOT NULL, -- e.g., 10%
  driver_earnings NUMERIC NOT NULL, -- e.g., 90%
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending' -- pending / paid / failed
); -->
