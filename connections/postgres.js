import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'portal_db',
    password: 't6Yu1Cvj3Eka',
    port: 5432
});

module.exports = { pool: pool };