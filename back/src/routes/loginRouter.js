const { Router } = require('express');
const { buscandoVagas } = require('../controller/loginController');
const router = Router();

router.get("/login", buscandoVagas)
module.exports = router;