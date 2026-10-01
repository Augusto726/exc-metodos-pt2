const produtos = [
  { nome: "Teclado", estoque: 15 },
  { nome: "Monitor", estoque: 0 },
  { nome: "Mouse", estoque: 25 }
];

const todosEmEstoque = produtos.every(produto => produto.estoque > 0);

console.log(todosEmEstoque); 