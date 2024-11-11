let usuario = JSON.parse(localStorage.getItem('usuario'))

console.log(usuario)

if (usuario) {
    let blocoNav = document.getElementById("blocoNav")
    blocoNav.style.display = 'none';

    if (usuario.tipo == 1) {
        let botaovaga = document.getElementById("botaovaga")
        botaovaga.style.display = 'block'; // se for empresa aparecera o botao de adicionar vaga
    } else {
        let botaovaga = document.getElementById("botaovaga")
        botaovaga.style.display = 'none'; // se for usuario nao vai aparecer o botao de adicionar vagas, mas poderá visualizar as vagas
    } 
} else {
    let blocoNav = document.getElementById("blocoNav")
    blocoNav.style.display = 'block';
}
function limparLocalStorage() {
    localStorage.clear();
    console.log('Local Storage limpo!'); // limpa o local storage
    location.reload(); // f5 na página para aparecer o botao de cadastro e login
}

async function getVagas() {
    const response = await fetch('http://localhost:3005/api/buscarVagas', {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    });

    let content = await response.json();
    console.log(content)

    if (content.success) {
        // alert("Formulário enviado com successo, aproveite!")
        // window.location.reload();

        const card_container = document.querySelector('.card-container');
        //localStorage.getItem() <-- utilizar esse comando para buscar o tipo de conta
        //COM O IF E ELSE atualizar o style do botão para display: block
        console.log(content.data);
        for (let i = 0; i < content.data.length; i++) {
            card_container.innerHTML += `<a href="vagainfo.html?id=${content.data[i].id}"><div class="card"><h3>${content.data[i].nome_empresa}</h3><p>${content.data[i].beneficios}</p><p>${content.data[i].descricao}</p><p>${content.data[i].requisitos}</p></div></a>`;
        }

    } else {
        // alert("Não enviado");
        console.error()
    }
}


// Supondo que você tenha uma lista de vagas renderizadas na página
let vagasList = document.querySelectorAll(".vaga"); // Selecione todos os elementos que representam as vagas

vagasList.forEach(vaga => {
    vaga.onclick = async function () {
        let idVaga = this.getAttribute("data-id"); // Supondo que você tenha um atributo data-id com o ID da vaga

        const response = await fetch(`http://localhost:3005/api/cadastro/vagas/${idVaga}`, {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        });

        let detalhesVaga = await response.json();

        if (detalhesVaga.success) {
            // Aqui você pode exibir os detalhes da vaga. Por exemplo:
            document.getElementById("nomeEmpresa").innerText = detalhesVaga.data.nomeEmpresa;
            document.getElementById("descricaoEmpresa").innerText = detalhesVaga.data.descricaoEmpresa;
            document.getElementById("requisitos").innerText = detalhesVaga.data.requisitos;
            document.getElementById("beneficios").innerText = detalhesVaga.data.beneficios;
            document.getElementById("contato").innerText = detalhesVaga.data.contato;


        
        } else {
            alert("Erro ao buscar os detalhes da vaga.");
        }
    };
});

getVagas();