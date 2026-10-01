const produtos = [
  { id: 1, nome: 'Camiseta', preco: 50 },
  { id: 2, nome: 'Calça', preco: 120 },
  { id: 3, nome: 'Tênis', preco: 200 },
  { id: 4, nome: 'Boné', preco: 40 }
];

const produtoId3 = produtos.find(produto => produto.id === 3);

console.log(produtoId3);
