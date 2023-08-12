const LanchoneteDB = require("./caixa-da-lanchonete");
const ItemPedido = require("./item-pedido");

const lanchonete = new LanchoneteDB();

// Exemplo de uso
const pedido = [
  new ItemPedido("cafe"),
  new ItemPedido("chantily", { codigo: "cafe" }),
  new ItemPedido("combo1"),
];

const formaPagamento = "dinheiro";

const valorTotal = lanchonete.calcularValorDaCompra(pedido, formaPagamento);
console.log(`Valor total: R$ ${valorTotal}`);
