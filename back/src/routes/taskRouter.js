const { Router } = require('express');
const router = Router();

const { storeTask, buscandoVagas } = require('../controller/taskController');

// GET

router.get('/buscarVagas', buscandoVagas);

// POST

router.post('/cadastro/vagas', storeTask);

module.exports = router;