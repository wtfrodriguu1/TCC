async function getVagaInfo(vagaId) {
    const response = await fetch('http://localhost:3005/api/buscarVagas', {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    });

    let content = await response.json();
    
    // console.log("entrou:", content.data)
    if (content.success) {
        console.log("teste: "+ content.data.length)
        const vaga = content.data.filter((v)=>v.id == vagaId)
        // content.data.map((v)=>console.log(v.id))
        // console.log(JSON.stringify(content.data))
        
        const nomeEmpresa = document.getElementById("nomeEmpresa")
        const descricaoEmpresa = document.getElementById("descricaoEmpresa")
        const  requisitos = document.getElementById("requisitos")
        const  beneficios = document.getElementById("beneficios")
        const  contato = document.getElementById("contato")
      
        nomeEmpresa.value = vaga[0].nome_empresa
        descricaoEmpresa.value = vaga[0].descricao
        requisitos.value = vaga[0].requisitos
        beneficios.value = vaga[0].beneficios
        contato.value = vaga[0].contato

        console.log(vaga)

    } else {
        console.error()
    }
}

getVagaInfo(1);

