const { Router } = require('express');
const { storeCadastro, verificarEmailRota } = require('../controller/cadastroController');
const router = Router();

// Rota para verificar se o e-mail já existe
router.post("/verificar-email", verificarEmailRota);

// Rota para o cadastro
router.post("/cadastrar", storeCadastro);

module.exports = router;
