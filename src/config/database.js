//Import dotenv para ler .env
require('dotenv').config();

// Import biblioteca mysql2
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    //Configurações do Banco
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,


// Configurações do pool
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
});


async function testConnection() {
    try{
        // Tenta fazer uma conexão
        const connection = await pool.getConnection();

        console.log('Conexão com Banco de Dados estabelecida com sucesso!');

        connection.release();
    } catch (error) {
        console.error('Erro ao conectar ao Banco de Dados: ', error.message);
        process.exit(1);
    }
}

module.exports = {
    pool,
    testConnection
};