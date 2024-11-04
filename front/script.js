let button = document.getElementById("enviar");

button.onclick = async function () {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    if (!email && !senha) {
        alert("Preencha todos os campos")
        return false
    } else {

        let data = { email, senha }

        const response = await fetch('http://localhost:3005/api/store/task', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        console.log(content);
        if (content.sucess) {
            alert("Formulário enviado com sucesso, aproveite!")
            window.location.reload();
        } else {
            alert("Não enviado");
        }
    }
}