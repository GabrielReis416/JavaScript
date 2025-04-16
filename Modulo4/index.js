const estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
    const livroExistente = estoque.find(livro => livro.titulo === titulo);
    
    if (livroExistente) {
      console.log(`O livro "${titulo}" já está no estoque.`);
    } else {
      estoque.push({ titulo, autor, quantidade });
      console.log(`Livro "${titulo}" adicionado ao estoque.`);
    }
  }
  
  function removerLivro(titulo) {
    const index = estoque.findIndex(livro => livro.titulo === titulo);
    
    if (index !== -1) {
      estoque.splice(index, 1);
      console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
      console.log(`Livro "${titulo}" não encontrado.`);
    }
  }
  
  function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoque.find(livro => livro.titulo === titulo);
    
    if (livro) {
      livro.quantidade = novaQuantidade;
      console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
      console.log(`Livro "${titulo}" não encontrado.`);
    }
  }
  
  function listarLivros() {
    if (estoque.length === 0) {
      console.log("Estoque vazio.");
    } else {
      console.log("Livros disponíveis no estoque:");
      for (const livro of estoque) {
        console.log(`- ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
      }
    }
  }
