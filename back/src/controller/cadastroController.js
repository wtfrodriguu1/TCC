const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Função para verificar se o e-mail já está registrado
async function verificarEmail(email) {
    return new Promise((resolve, reject) => {
        const query = "SELECT COUNT(*) AS total FROM cadastro WHERE email = ?";
        connection.query(query, [email], (err, results) => {
            if (err) {
                reject(err);  // Se houver erro na consulta, rejeita a promessa
            } else {
                resolve(results[0].total > 0);  // Retorna true se o e-mail já existir
            }
        });
    });
}

// Cadastrar pessoa - POST
async function storeCadastro(request, response) {
    const { name, date, telefone, email, password, tipoSelecionado } = request.body;

    try {
        // Verificar se o e-mail já está registrado
        const emailExistente = await verificarEmail(email);
        if (emailExistente) {
            return response.status(400).json({
                success: false,
                message: "Este e-mail já está em uso. Por favor, escolha outro."
            });
        }

        // Se o e-mail não existir, continua o processo de cadastro
        const params = [name, date, telefone, email, password, tipoSelecionado];
        const query = "INSERT INTO cadastro(nome, nascimento, telefone, email, senha, tipo) VALUES(?,?,?,?,?,?)";

        connection.query(query, params, (err, results) => {
            if (err) {
                return response.status(400).json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                });
            }

            // Se o cadastro for bem-sucedido
            return response.status(201).json({
                success: true,
                message: "Cadastro realizado com sucesso!",
                data: results
            });
        });
    } catch (err) {
        console.error("Erro ao verificar e-mail ou cadastrar:", err);
        response.status(500).json({
            success: false,
            message: "Erro ao processar o cadastro. Tente novamente mais tarde.",
            data: err
        });
    }
}

// Rota para verificar se o e-mail já existe
async function verificarEmailRota(request, response) {
    const { email } = request.body;

    try {
        const emailExistente = await verificarEmail(email);
        response.json({ existe: emailExistente });
    } catch (err) {
        console.error('Erro ao verificar e-mail:', err);
        response.status(500).json({ sucesso: false, mensagem: 'Erro ao verificar o e-mail' });
    }
}

module.exports = {
    storeCadastro,
    verificarEmailRota
};
