import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 250px;
  
  height: auto;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 4px 0;
  

`
const AddToCartButton = styled.button`
  align-items: baseline;
  margin-top: 4px;
`

export class CardProduto extends React.Component {
  render() {
    const produto = this.props.produto
    return <CardContainer>
      <img src={produto.imagem}/>
      <CardInfo>
        <p>{produto.nome}</p>
        <p>R${produto.valor},00</p>
        <AddToCartButton onClick={() => this.props.onAddProductToCart(produto.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}
