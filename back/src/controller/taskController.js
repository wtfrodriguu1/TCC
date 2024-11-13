const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Cadastrar vagas - POST
async function storeTask(request, response) {
    const params = Array(
        request.body.nome_empresa,
        request.body.descricao,
        request.body.requisitos,
        request.body.beneficios,
        request.body.contato,
        request.body.id
    );

    console.log(params)

    const query = "INSERT INTO vagas(nome_empresa, descricao, requisitos, beneficios, contato, id_empresa) VALUES(?,?,?,?,?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true, 
                    message: "successo!",
                    data: results
                })
        } else{
            response
                .status(400)
                .json({
                    success: false,
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
                    success: true, 
                    message: "successo com o GET!",
                    data: results
                })
        } else{
            response
                .status(400)
                .json({
                    success: false,
                    message: "ops, deu problema no GET!",
                    data: err
                })
        }
    })

}

// async function dele(request, response) {

module.exports = {
    storeTask,
    buscandoVagas
}