document.getElementById("enviar1").onclick = async function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = { email, password };

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
        if (content.success) {
            Swal.fire({
                title: "Login bem-sucedido!",
                icon: "success"
            }).then(() => {
                // Salva informações do usuário e tipo no localStorage
                localStorage.setItem("usuario", JSON.stringify(content.data));
                localStorage.setItem("id", JSON.stringify(content.data.id));
                localStorage.setItem("tipoUsuario", content.data.tipo); // Salva o tipo diretamente

                window.location.href = "../front/vagas.html";
            });
        } else {
            Swal.fire({
                title: "Falha no login",
                text: content.message,
                icon: "error"
            });
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        Swal.fire({
            title: "Erro!",
            text: "Erro ao fazer login. Verifique o console para mais detalhes.",
            icon: "error"
        });
    }
}