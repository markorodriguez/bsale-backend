import mysql from "mysql2"

const db = mysql.createPool({
    connectionLimit: 5,
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test",
})

db.getConnection((err:any)=>{
    !err ? console.log('Connected to database') : console.log(err)
})

export default db