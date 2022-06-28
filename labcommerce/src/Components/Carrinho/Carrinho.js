import React from "react";
import { ItensCarrinho } from "./ItensCarrinho";
import styled from "styled-components";

const CarrinhoDeComprasContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const ListaCarrinhoContainer = styled.div`
  display: grid;
  gap: 8px;
`;

export class Carrinho extends React.Component {
  getTotalValue = () => {
    let valorTotal = 0;

    for (let produto of this.props.productsInCart) {
      valorTotal += produto.valor * produto.qtd;
    }

    return valorTotal;
  };

  render() {
    return (
      <CarrinhoDeComprasContainer>
        <h3>Carrinho:</h3>
        <ListaCarrinhoContainer>
          {this.props.productsInCart.map((produto) => {
            return (
              <ItensCarrinho
                cartItem={produto}
                onRemoveProductFromCart={this.props.onRemoveProductFromCart}
              />
            );
          })}
        </ListaCarrinhoContainer>
        <br />
        <p>Valor total: R${this.getTotalValue()},00</p>
      </CarrinhoDeComprasContainer>
    );
  }
}
