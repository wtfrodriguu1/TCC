let button = document.getElementById("enviar1");

button.onclick = async function() {
    const response = await fetch ('http://localhost:3002/api/login', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    });

    let content = await response.json();

    console.log(content);
    if(content.sucess) {
        alert("deu bom")
        // window.location.href = "../front/vagas.html";
    } else {
        alert("Não deu bom");
    }
}