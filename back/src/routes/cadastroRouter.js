const { Router } = require('express');
const { storeCadastro } = require('../controller/cadastroController');
const router = Router();

router.post("/cadastrar", storeCadastro)
module.exports = router;