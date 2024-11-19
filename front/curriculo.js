let button = document.querySelector("button");

button.onclick = async function () {
    let curriculoNome = document.getElementById("curriculoNome").value;
    let curriculoIdade = document.getElementById("curriculoIdade").value;
    let curriculoExperiencia = document.getElementById("curriculoExperiencia").value;
    let curriculoBio = document.getElementById("curriculoBio").value;
    let enviarcurriculo = document.getElementById("enviarcurriculo").value;

    let data = { curriculoNome, curriculoIdade, curriculoExperiencia, curriculoBio, enviarcurriculo }

    const response = await fetch('http://localhost:3005/api/carregar', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();

    console.log(content);
    if (content.success) {
        alert("Formulário enviado com successo, aproveite!")
        window.location.href = "../front/vagas.html";
    } else {
        alert("Não enviado");
    }
}   