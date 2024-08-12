const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function loginUser(request, response) {
    const { email, password } = request.body; // Ajustado para usar "password"

    const query = "SELECT * FROM cadastro WHERE email = ? AND senha = ?";

    connection.query(query, [email, password], (err, results) => {
        if (err) {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Ops, deu problema no login!",
                    data: err
                });
        } else if (results.length > 0) { // Verifica se há resultados
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Login bem-sucedido!",
                    data: results
                });
        } else {
            response
                .status(401) // Código de status para "Não autorizado"
                .json({
                    sucess: false,
                    message: "Credenciais inválidas!",
                    data: []
                });
        }
    });
}

module.exports = {
    loginUser
}
