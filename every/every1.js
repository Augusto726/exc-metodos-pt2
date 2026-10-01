const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "MousePad", preco: 60 }
];

const todosMaioresQue50 = produtos.every(produto => produto.preco > 50);

console.log(todosMaioresQue50); 