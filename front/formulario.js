let button = document.querySelector("button");

button.onclick = async function () {
    let nome_empresa = document.getElementById("nome-empresa").value;
    let descricao = document.getElementById("descricao").value;
    let requisitos = document.getElementById("requisitos").value;
    let beneficios = document.getElementById("beneficios").value;
    let contato = document.getElementById("contato").value;
    let id = localStorage.getItem("id");

    let data = { nome_empresa, descricao, requisitos, beneficios, contato, id }

    try {
        const response = await fetch('http://localhost:3005/api/cadastro/vagas', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
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
                window.location.href = "../front/vagas.html"; // Redireciona após fechar o alerta
            });
        } else {
            Swal.fire({
                title: "Erro!",
                text: "Não enviado. Tente novamente.",
                icon: "error"
            });
        }
    } catch (error) {
        console.error("Erro:", error);
        Swal.fire({
            title: "Erro!",
            text: "Houve um erro ao enviar a vaga. Tente novamente.",
            icon: "error"
        });
    }
};