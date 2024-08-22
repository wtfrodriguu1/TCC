const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/taskRouter');
const routerCadastro = require ("./routes/cadastroRouter")
const routerLogin = require ("./routes/loginRouter")
const routerCurriculo = require ("./routes/curriculoRouter")
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/api', routerCadastro);
app.use('/api', routerLogin);
app.use('/api', routerCurriculo);

module.exports = app;
    