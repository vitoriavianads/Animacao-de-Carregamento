  // Simulação de carregamento da página
  window.addEventListener('load', function(){
    document.getElementById('loaderContainer').style.display = 'none';
});

// Função para alterar o texto do cabeçalho principal
document.getElementById('changeHeadingBtn').addEventListener('click', function() {
    document.getElementById('mainHeading').textContent = 'Novo Título!';
});