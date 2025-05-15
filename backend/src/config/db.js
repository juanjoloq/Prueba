const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((error) => {
    if (error) {
        console.log("❌ Error conectando a MySQL:", error);
    } else {
        console.log("✅ Conectado a la base de datos MySQL");
    }
});

module.exports = db;
