const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Cadastrar vagas - POST
async function storeTask(request, response) {
    const params = Array(
        request.body.nome_empresa,
        request.body.descricao
    );

    const query = "INSERT INTO vagas(nome_empresa, descricao) VALUES(?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    sucess: true, 
                    message: "Sucesso!",
                    data: results
                })
        } else{
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "ops, deu problema!",
                    data: err
                })
        }
    })

}

// Buscar as vagas no BD - GET
async function buscandoVagas(request, response) {
    const query = "SELECT * FROM vagas;";

    connection.query(query, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    sucess: true, 
                    message: "Sucesso com o GET!",
                    data: results
                })
        } else{
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "ops, deu problema no GET!",
                    data: err
                })
        }
    })

}

module.exports = {
    storeTask,
    buscandoVagas
}