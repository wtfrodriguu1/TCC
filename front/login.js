document.getElementById("enviar1").onclick = async function() {
    let email = document.getElementById("email").value; // Obtendo o valor dos campos
    let password = document.getElementById("password").value;
    
    let data = { email, password }; // Nome dos campos deve corresponder ao que o servidor espera

    try {
        const response = await fetch('http://localhost:3005/api/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        console.log(content);
        if (content.sucess) {
            alert("Login bem-sucedido!");
            window.location.href = "../front/vagas.html";
        } else {
            alert("Falha no login: " + content.message);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert("Erro ao fazer login. Verifique o console para mais detalhes.");
    }
}
