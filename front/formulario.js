let button = document.querySelector("button");

button.onclick = async function() {
    let nome_empresa = document.getElementById("nome-empresa").value;
    let descricao = document.getElementById("descricao").value;

    let data = {nome_empresa,descricao}

    const response = await fetch ('http://localhost:3001/api/cadastro/vagas', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    console.log(content);
    if(content.sucess) {
        alert("Formulário enviado com sucesso, aproveite!")
        window.location.reload();
    } else {
        alert("Não enviado");
    }
}