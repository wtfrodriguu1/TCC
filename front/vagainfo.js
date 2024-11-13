const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

getVagaInfo(id);

async function getVagaInfo(vagaId) {
    const response = await fetch('http://localhost:3005/api/buscarVagas', {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    });

    const content = await response.json();
    
    if (content.success) {
        const vaga = content.data.find(v => v.id == vagaId);
        
        if (vaga) {
            document.getElementById("nomeEmpresa").value = vaga.nome_empresa;
            document.getElementById("descricaoEmpresa").value = vaga.descricao;
            document.getElementById("requisitos").value = vaga.requisitos;
            document.getElementById("beneficios").value = vaga.beneficios;
            document.getElementById("contato").value = vaga.contato;
        }
    } else {
        console.error("Erro ao buscar informações da vaga.");
    }
}

// Função para deletar a vaga
async function deleteVaga() {
    if (confirm("Tem certeza de que deseja deletar esta vaga?")) {
        try {
            const response = await fetch(`http://localhost:3005/api/deletarVaga/${id}`, {
                method: 'DELETE',
                headers: { "Content-type": "application/json;charset=UTF-8" }
            });
            
            const result = await response.json();
            
            if (result.success) {
                alert("Vaga deletada com sucesso.");
                window.location.href = "/"; // Redirecionar após deletar
            } else {
                alert("Erro ao deletar a vaga.");
            }
        } catch (error) {
            console.error("Erro ao deletar a vaga:", error);
        }
    }
}
