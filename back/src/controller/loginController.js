const connection = require('../config/db');
const dotenv = require('dotenv').config();


// Buscar login no BD - GET
async function buscandoVagas(request, response) {
    const query = "SELECT * FROM cadastro;";

    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    sucess: true,
                    message: "Sucesso com o GET!",
                    data: results
                })
        } else {
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
    buscandoVagas
}