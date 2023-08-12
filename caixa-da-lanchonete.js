class LanchoneteDB {
  constructor() {
    this.cardapio = {
      cafe: { descricao: "Café", valor: 3.0 },
      chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
      suco: { descricao: "Suco Natural", valor: 6.2 },
      sanduiche: { descricao: "Sanduíche", valor: 6.5 },
      queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
      salgado: { descricao: "Salgado", valor: 7.25 },
      combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
      combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    };

    this.formasPagamento = ["dinheiro", "debito", "credito"];
  }

  calcularValorDaCompra(pedido, formaPagamento) {
    if (!this.formasPagamento.includes(formaPagamento)) {
      return "Forma de pagamento inválida!";
    }

    if (!pedido || pedido.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    let total = 0;

    for (const itemPedido of pedido) {
      const itemCardapio = this.cardapio[itemPedido.codigo];

      if (!itemCardapio) {
        return "Item inválido!";
      }

      total += itemCardapio.valor;

      if (itemPedido.extra) {
        const itemExtra = this.cardapio[itemPedido.extra.codigo];

        if (!itemExtra) {
          return "Item extra inválido!";
        }

        if (!itemCardapio.extra) {
          return "Item extra não pode ser pedido sem o principal";
        }

        total += itemExtra.valor;
      }
    }

    if (formaPagamento === "dinheiro") {
      total *= 0.95; // Desconto de 5% para pagamento em dinheiro
    } else if (formaPagamento === "credito") {
      total *= 1.03; // Acréscimo de 3% para pagamento a crédito
    }

    return total.toFixed(2);
  }
}

module.exports = LanchoneteDB;
