const produtos = [
  { nome: "Teclado", estoque: 15 },
  { nome: "Monitor", estoque: 8 },
  { nome: "Mouse", estoque: 25 }
];

const totalEstoque = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.estoque;
}, 0);

console.log(totalEstoque); 