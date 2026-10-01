const produtos = [
  { nome: 'Camiseta', preco: 50, estoque: 10 },
  { nome: 'Calça', preco: 120, estoque: 0 },
  { nome: 'Tênis', preco: 200, estoque: 5 },
  { nome: 'Jaqueta', preco: 300, estoque: 0 }
];

const produtosDisponiveisECaros = produtos.filter(produto => produto.estoque > 0 && produto.preco > 100);

console.log(produtosDisponiveisECaros);
