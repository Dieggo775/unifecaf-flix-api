//Import Express
const express = require('express');

const FilmeController = require('../controllers/filmeController');

const router = express.Router();

router.get('/filme', FilmeController.listarTodos);

router.get('/filme/:id', FilmeController.buscarPorId);

router.get('/filtro/filme', FilmeController.filtrar);

module.exports = router;