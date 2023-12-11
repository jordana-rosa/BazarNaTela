document.addEventListener("DOMContentLoaded", () => {
    const listaProdutos = document.getElementById('listaProdutos');
  
    listaProdutos.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn-excluir')) {
        const produtoItem = event.target.closest('.produto-item');
        produtoItem.remove();
        
      }
    });
  });
  