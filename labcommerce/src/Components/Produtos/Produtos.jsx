import React from 'react'
import { CardProduto } from './CardProduto'

import styled from 'styled-components';

const ProductsContainer = styled.div`

`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export class Produtos extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  getFilteredAndOrderedList = () => {
    return this.props.produtos
      .filter((produto) => this.props.maxFilter ? produto.valor < this.props.maxFilter : true)
      .filter((produto) => this.props.minFilter ? produto.valor > this.props.minFilter : true)
      .filter((produto) => this.props.nameFilter ? produto.name.includes(this.props.nameFilter) : true)
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.valor - b.valor : b.valor - a.valor)
  }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList()
    return <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
        <label>
          Ordenação:
          <select value={this.state.sort} onChange={this.onChangeSort}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        {filteredAndOrderedList.map((produto) => {
          return <CardProduto
            produto={produto}
            onAddProductToCart={this.props.onAddProductToCart}
          />
        })}
      </ProductsGrid>
    </ProductsContainer>
  }
}
