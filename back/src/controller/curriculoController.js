const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Carregar currículo - POST
async function storeCurriculo(request, response) {
    const params = Array(
        request.body.nome_user,
        request.body.descricao1,
        request.body.idade
    );

    const query = "INSERT INTO curriculo(nome, descricao, idade) VALUES(?,?,?)";

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

module.exports = {
    storeCurriculo
}