const produtos = [
  { nome: 'Camiseta', estoque: 10 },
  { nome: 'Calça', estoque: 0 },
  { nome: 'Tênis', estoque: 5 },
  { nome: 'Jaqueta', estoque: 0 }
];

const primeiroSemEstoque = produtos.find(produto => produto.estoque === 0);

console.log(primeiroSemEstoque);
