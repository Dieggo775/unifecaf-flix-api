//Express
const express = require('express');

require('dotenv').config();

const { testConnection } = require('./src/config/database');

const filmeRoutes = require('./src/routes/filmeRoutes');

const errorHandler = require('./src/middleware/errorHandler');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {

    const hora = new Date().toLocaleTimeString();

    console.log(`[${hora}] ${req.method} ${req.path}`);

    next();
});

app.get('/health', (req, res) => {
    res.status(200).json({
        sucesso: true,
        mensagem: 'API Unifecaf Flix está funcionando',
        timestamp: new Date()
    });
});

app.use('/v1/controle-filmes', filmeRoutes);

app.use((req, res) => {
    res.status(404).json({
        mensagem: false,
        dica: 'Verifique o caminho da rota e o método HTTP utilizado'
    });
});

app.use(errorHandler);


async function iniciarServidor() {
    try {
        await testConnection();

        app.listen(PORT, () => {
            console.log(`\n╔═══════════════════════════════════════╗`);
            console.log(`  ║  UniFECAF Flix API                    ║`);
            console.log(`  ║  Servidor rodando na porta ${PORT}    ║`);
            console.log(`  ║  Ambiente: ${process.env.NODE_ENV}    ║`);
            console.log(`  ╚═══════════════════════════════════════╝\n`);
            console.log(`Acesse: http://localhost:${PORT}/health\n`);
        });
    } catch (error) {

        console.error('Falha ao iniciar o servidor: ', error);

        process.exit(1);
    }
}

iniciarServidor();

process.on('unhandledRejection', (reason, promise) => {
    console.error('Promise rejeitada não tratada:', promise, 'motivo:', reason);
});

module.exports = app;