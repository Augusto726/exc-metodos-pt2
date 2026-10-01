const produtos = [
  { nome: "Teclado", preco: 150, estoque: 15 },
  { nome: "Monitor", preco: 900, estoque: 8 },
  { nome: "Mouse", preco: 80, estoque: 25 }
];

const patrimonioTotal = produtos.reduce((acumulador, produto) => {
  return acumulador + (produto.preco * produto.estoque);
}, 0);

console.log(patrimonioTotal); 