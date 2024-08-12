const { Router } = require('express');
const {loginUser } = require('../controller/loginController');
const router = Router();

router.post("/login", loginUser)
module.exports = router;