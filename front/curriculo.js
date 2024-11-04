let button = document.querySelector("button");

button.onclick = async function () {
    let nome_user = document.getElementById("nome-user").value;
    let descricao1 = document.getElementById("descricao1").value;
    let idade = document.getElementById("idade").value;
    let enviar_formularioc = document.getElementById("enviar_formularioc").value;

    let data = { nome_user, descricao1, idade, enviar_formularioc }

    const response = await fetch('http://localhost:3005/api/carregar', {
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