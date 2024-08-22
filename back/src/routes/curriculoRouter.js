const { Router } = require('express');
const { storeCurriculo } = require('../controller/curriculoController');
const router = Router();

router.post("/carregar", storeCurriculo)
module.exports = router;