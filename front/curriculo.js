let button = document.querySelector("button");

button.onclick = async function () {
    let curriculoNome = document.getElementById("curriculoNome").value;
    let curriculoIdade = document.getElementById("curriculoIdade").value;
    let curriculoExperiencia = document.getElementById("curriculoExperiencia").value;
    let curriculoBio = document.getElementById("curriculoBio").value;
    let enviarcurriculo = document.getElementById("enviarcurriculo").value;

    let data = { curriculoNome, curriculoIdade, curriculoExperiencia, curriculoBio, enviarcurriculo }

    try {
        const response = await fetch('http://localhost:3005/api/carregar', {
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
            text: "Houve um erro ao enviar o currículo. Tente novamente.",
            icon: "error"
        });
    }
}