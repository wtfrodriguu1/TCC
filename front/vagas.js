async function getVagas() {
    const response = await fetch ('http://localhost:3001/api/buscarVagas', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    });

    let content = await response.json();
    console.log(content)

    if(content.sucess) {
        // alert("Formulário enviado com sucesso, aproveite!")
        // window.location.reload();

        const card_container = document.querySelector('.card-container');

        for(let i = 0; i < content.data.length;i++){
            card_container.innerHTML += `<div class="card"><h3>${content.data[i].nome_empresa}</h3><p>${content.data[i].descricao}</p></div>`;
        }

    } else {
        // alert("Não enviado");
        console.error()
    }
}

getVagas();