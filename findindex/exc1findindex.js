const produtos = [
  { nome: "Teclado", ativo: true },
  { nome: "Monitor", ativo: true },
  { nome: "Mouse", ativo: false }
];

const indiceMonitor = produtos.findIndex(produto => produto.nome === "Monitor");

console.log(indiceMonitor);