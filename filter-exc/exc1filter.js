const produtos = [
  { nome: 'Camiseta', preco: 50, ativo: true },
  { nome: 'Calça', preco: 120, ativo: false },
  { nome: 'Tênis', preco: 200, ativo: true }
];

const produtosAtivos = produtos.filter(produto => produto.ativo);

console.log(produtosAtivos);
