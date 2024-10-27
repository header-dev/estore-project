#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER masterdb WITH PASSWORD 'Debuger@3011';
    CREATE DATABASE estore_db;
    GRANT ALL PRIVILEGES ON DATABASE estore_db TO masterdb;
EOSQL