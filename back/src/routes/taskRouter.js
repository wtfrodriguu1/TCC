const { Router } = require('express');
const router = Router();

const { storeTask, buscandoVagas, deleteVaga } = require('../controller/taskController');

// GET
router.get('/buscarVagas', buscandoVagas);

// POST
router.post('/cadastro/vagas', storeTask);

// DELETE
router.delete('/deletarVaga/:id', deleteVaga);

module.exports = router;
