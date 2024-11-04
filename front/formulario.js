let button = document.querySelector("button");

button.onclick = async function () {
    let nome_empresa = document.getElementById("nome-empresa").value;
    let descricao = document.getElementById("descricao").value;
    let enviar_formulario = document.getElementById("enviar_formulario").value;

    let data = { nome_empresa, descricao, enviar_formulario }

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
}