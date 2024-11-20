let button = document.getElementById("enviar");

button.onclick = async function () {
    let name = document.getElementById("name").value;
    let date = document.getElementById("data-nascimento").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Verifica qual opção foi selecionada
    let tipoSelecionado;
    if (document.getElementById('empresa').checked) {
        tipoSelecionado = 1;
    } else if (document.getElementById('cliente').checked) {
        tipoSelecionado = 2;
    }

    // Verifica se um tipo foi selecionado
    if (!tipoSelecionado) {
        Swal.fire({
            title: "Atenção!",
            text: "Por favor, selecione um tipo.",
            icon: "warning"
        });
        return; // Para a execução caso nenhum tipo tenha sido selecionado
    }

    // Verificar se o e-mail já existe
    const emailExiste = await verificarEmail(email);
    if (emailExiste) {
        Swal.fire({
            title: "Atenção!",
            text: "Este e-mail já está em uso. Por favor, use outro e-mail.",
            icon: "warning"
        });
        return; // Impede o envio do formulário se o e-mail já existir
    }

    // Prepara os dados para envio
    let data = { name, date, telefone, email, password, tipoSelecionado };

    try {
        const response = await fetch('http://localhost:3005/api/cadastrar', {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        console.log(content);
        if (content.success) {
            Swal.fire({
                title: "Sucesso!",
                text: "Formulário enviado com sucesso, aproveite!",
                icon: "success"
            }).then(() => {
                window.location.href = "../front/login.html";
            });
        } else {
            Swal.fire({
                title: "Erro!",
                text: "Não enviado: " + (content.message || "Erro desconhecido"),
                icon: "error"
            });
        }
    } catch (error) {
        console.error("Erro:", error);
        Swal.fire({
            title: "Erro!",
            text: "Houve um erro ao enviar o formulário.",
            icon: "error"
        });
    }
};

// Função para verificar se o e-mail já existe no banco de dados
async function verificarEmail(email) {
    try {
        const response = await fetch('http://localhost:3005/api/verificar-email', {
            method: 'POST',
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify({ email: email })
        });

        const data = await response.json();
        return data.existe;  // Retorna true se o e-mail existir, caso contrário, false
    } catch (error) {
        console.error('Erro na verificação de e-mail:', error);
        Swal.fire({
            title: "Erro!",
            text: "Erro ao verificar o e-mail. Tente novamente.",
            icon: "error"
        });
        return false;  // Caso haja erro na verificação, consideramos que o e-mail não existe
    }
}