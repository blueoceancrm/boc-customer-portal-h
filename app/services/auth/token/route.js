import * as argon2 from 'argon2';
import { pool } from '/connections/postgres';

export async function POST(request) {
    // Map input values
    const payload = await request.json();
    // Query user by username
    // await client.connect();
    const sqlQuery = 'SELECT password FROM users WHERE username = $1';
    const users = await pool.query(sqlQuery, [payload.username]);
    // Verify password from the form against the value from the database    
    const isVerified = await argon2.verify(users.rows[0].password, payload.password);
    return Response.json({ isVerified: isVerified });
}


    // const argon2Settings = {
    //     type: argon2.argon2id,
    //     memoryCost: 19456,
    //     timeCost: 2,
    //     parallelism: 1
    // };
    // const hash = await argon2.hash(password, argon2Settings);