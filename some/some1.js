const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Notebook", preco: 4500 }
];

const temProdutoCaro = produtos.some(produto => produto.preco > 3000);

console.log(temProdutoCaro); 