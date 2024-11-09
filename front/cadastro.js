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
        alert("Por favor, selecione um tipo.");
        return; // Para a execução caso nenhum tipo tenha sido selecionado
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
        if (content.success) { // Corrigido de 'success' para 'success'
            alert("Formulário enviado com successo, aproveite!");
            window.location.href = "../front/login.html";
        } else {
            alert("Não enviado: " + (content.message || "Erro desconhecido"));
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Houve um erro ao enviar o formulário.");
    }
};
