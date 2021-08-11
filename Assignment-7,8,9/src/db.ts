import { Pool } from "pg";

const pool=new Pool({
    user: "postgres",
    host: "localhost",
    database: "dbdata",
    password: "shardul",
    port: 5432,
});
export{ pool };
