const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Carregar currículo - POST
async function storeCurriculo(request, response) {
    const params = Array(
        request.body.curriculoNome,
        request.body.curriculoIdade,
        request.body.curriculoExperiencia,
        request.body.curriculoBio,
        request.bodyenviarcurriculo
    );

    const query = "INSERT INTO curriculo(nome, idade, experiencias, bio) VALUES(?,?,?,?)";

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

module.exports = {
    storeCurriculo
}