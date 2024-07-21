-- prod_schema.sql
DROP DATABASE IF EXISTS colors_prod_yz0p;
CREATE DATABASE colors_prod_yz0p;

\c colors_prod_yz0p;

CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    is_favorite BOOLEAN
);