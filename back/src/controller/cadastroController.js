const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Cadastrar pessoa - POST
async function storeCadastro(request, response) {
    const params = Array(
        request.body.email,
        request.body.password
    );

    const query = "INSERT INTO cadastro(email, senha) VALUES(?,?)";

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

// Buscar login no BD - GET
async function buscandoVagas(request, response) {
    const query = "SELECT * FROM cadastro;";

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
    storeCadastro,
    buscandoVagas
}