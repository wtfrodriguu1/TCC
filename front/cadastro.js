let button = document.getElementById("enviar");

button.onclick = async function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    

    let data = {email,password}

    const response = await fetch ('http://localhost:3005/api/cadastrar', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    console.log(content);
    if(content.sucess) {
        alert("Formulário enviado com sucesso, aproveite!")
        window.location.href = "../front/vagas.html";
    } else {
        alert("Não enviado");
    }
}