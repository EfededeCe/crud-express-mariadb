import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "localhost",
    user: "admin",
    password: "123asd",
    port: 3306,
    database: "companydb"
});


