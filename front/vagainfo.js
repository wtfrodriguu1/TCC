const userData = JSON.parse(localStorage.getItem('detalhes'));
if (userData) {
  // Use os dados do usuário aqui
  console.log(userData);

  const nome_empresa = document.getElementById("nomeEmpresa")
  const descricao = document.getElementById("descricaoEmpresa")
  const requisitos = document.getElementById("requisitos")
  const beneficios = document.getElementById("beneficios")
  const contato = document.getElementById("contato")

  nome_empresa.value = userData.nome_empresa
  descricao.value = userData.email
  requisitos.value = userData.email
  beneficios.value = userData.email
  contato.value = userData.email
};