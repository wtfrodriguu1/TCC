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
        Swal.fire({
            title: "Erro!",
            text: "Erro ao buscar informações da vaga.",
            icon: "error"
        });
    }
}

// Função para deletar a vaga
async function deleteVaga() {
    const tipoUsuario = localStorage.getItem("tipoUsuario");

    // Verifica se o usuário é uma empresa (tipoUsuario == 1)
    if (tipoUsuario == "1") { // Tipo 1 é empresa
        const result = await Swal.fire({
            title: "Tem certeza?",
            text: "Você deseja deletar esta vaga?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:3005/api/deletarVaga/${id}`, {
                    method: 'DELETE',
                    headers: { "Content-type": "application/json;charset=UTF-8" }
                });

                const result = await response.json();

                if (result.success) {
                    Swal.fire({
                        title: "Sucesso!",
                        text: "Vaga deletada com sucesso.",
                        icon: "success"
                    }).then(() => {
                        window.location.href = "../front/vagas.html"; // Redirecionar após deletar
                    });
                } else {
                    Swal.fire({
                        title: "Erro!",
                        text: "Erro ao deletar a vaga.",
                        icon: "error"
                    });
                }
            } catch (error) {
                console.error("Erro ao deletar a vaga:", error);
                Swal.fire({
                    title: "Erro!",
                    text: "Houve um erro ao tentar deletar a vaga. Tente novamente.",
                    icon: "error"
                });
            }
        }
    } else {
        Swal.fire({
            title: "Acesso Negado!",
            text: "Somente empresas podem deletar vagas.",
            icon: "warning"
        });
    }
}