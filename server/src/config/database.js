import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: "django",
    password: "password1",
    host: "localhost",
    port: 5432,
    database: "task1"
});






