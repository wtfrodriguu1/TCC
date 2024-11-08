let button = document.querySelector("button");

button.onclick = async function () {
    let nome_empresa = document.getElementById("nome-empresa").value;
    let descricao = document.getElementById("descricao").value;
    let requisitos = document.getElementById("requisitos").value;
    let beneficios = document.getElementById("beneficios").value;
    let contato = document.getElementById("contato").value;
    let id = localStorage.getItem("id");

    let data = { nome_empresa, descricao, requisitos, beneficios, contato, id }

    const response = await fetch('http://localhost:3005/api/cadastro/vagas', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();

    console.log(content);
    if (content.sucess) {
        alert("Formulário enviado com sucesso, aproveite!")
        window.location.href = "../front/vagas.html";
    } else {
        alert("Não enviado");
    }
};