import React from 'react'
import { ItensCarrinho } from './ItensCarrinho'
import styled from 'styled-components';


const CarrinhoDeComprasContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const ListaCarrinhoContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class Carrinho extends React.Component {
  getTotalValue = () => {
    let totalValue = 0 

    for(let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }

  render() {
    return <CarrinhoDeComprasContainer>
      <h3>Carrinho:</h3>
      <ListaCarrinhoContainer>
        {this.props.productsInCart.map((product) => {
          return <ItensCarrinho 
                    cartItem={product} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </ListaCarrinhoContainer>
      <br/>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </CarrinhoDeComprasContainer>
  }
}