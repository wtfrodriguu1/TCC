const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/taskRouter');
const routerCadastro = require ("./routes/cadastroRouter")
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/api', routerCadastro)

module.exports = app;
    