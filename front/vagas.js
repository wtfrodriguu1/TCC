let usuario = JSON.parse(localStorage.getItem('usuario'))

console.log(usuario)

if(usuario) {
    let blocoNav = document.getElementById("blocoNav")
    blocoNav.style.display = 'none';

    if(usuario.tipo == 1) {
        let botaovaga = document.getElementById("botaovaga")
        botaovaga.style.display = 'block';
    } else {
        let botaovaga = document.getElementById("botaovaga")
        botaovaga.style.display = 'none';
    }
} else {
    window.location.href = "/front/login.html"
}


async function getVagas() {
    const response = await fetch ('http://localhost:3005/api/buscarVagas', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    });

    let content = await response.json();
    console.log(content)

    if(content.sucess) {
        // alert("Formulário enviado com sucesso, aproveite!")
        // window.location.reload();

        const card_container = document.querySelector('.card-container');
        //localStorage.getItem() <-- utilizar esse comando para buscar o tipo de conta
        //COM O IF E ELSE atualizar o style do botão para display: block
        for(let i = 0; i < content.data.length;i++){
            card_container.innerHTML += `<div class="card"><h3>${content.data[i].nome_empresa}</h3><p>${content.data[i].descricao}</p></div>`;
        }

    } else {
        // alert("Não enviado");
        console.error()
    }
}

getVagas();