const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Cadastrar pessoa - POST
async function storeCadastro(request, response) {
    console.log(request.body);
    const params = Array(
        request.body.name,
        request.body.email,
        request.body.password,
        request.body.tipoSelecionado,
    );

    const query = "INSERT INTO cadastro(nome, email, senha, tipo) VALUES(?,?,?,?)";

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
    storeCadastro
}