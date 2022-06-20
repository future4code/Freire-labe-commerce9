import './App.css';
import React from 'react';
import { Carrinho } from './Components/Carrinho/Carrinho';
import { Filtro } from './Components/Filtro/Filtro';
import { Produtos } from './Components/Produtos/Produtos';
import Apollo11 from './img/Apollo11.jpg'; 
import Epsilon from './img/Epsilon.jpg';
import Atlantis from './img/Atlantis.png';
import Atlas from './img/Atlas.jpg';
import SpaceX from './img/spaceX.jpg';
import VLS01 from './img/VLS01.jpg';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 4px;
  background-image: linear-gradient(lightblue, white, aquamarine);
  

`;

const produtos = [
  {
    id: 1,
    nome: "Foguete Missão Apollo 11",
    valor: 1000,
    imagem: Apollo11
  },
  {
    id: 2,
    nome: "Foguete Japonês Epsilon", 
    valor: 2000, 
    imagem: Epsilon
  },
  {
    id: 3,
    nome: "Ônibus Espacial Atlantis", 
    valor: 14000, 
    imagem: Atlantis
  },
  {
    id: 4,
    nome: "Foguete Espacial Atlas-Centaur", 
    valor: 5500, 
    imagem: Atlas
  },
  {
    id: 5,
    nome: "Veículo Espacial SpaceX", 
    valor: 25500, 
    imagem: SpaceX
  },
  {
    id: 6,
    nome: "Foguete brasileiro VLS01", 
    valor: 5500, 
    imagem: VLS01
  },
]

class App extends React.Component {
  state = {
    minFilter: "",
    maxFilter: "",
    nomeFilter: '',
    productsInCart: []
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangenomeFilter = (event) => {
    this.setState({nomeFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(produto => productId === produto.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(produto => {
        if(productId === produto.id) {
          return {
            ...produto,
            qtd: produto.qtd + 1
          }
        }

        return produto
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = produtos.find(produto => productId === produto.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, qtd: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((produtos) => {
      if(produtos.id === productId) {
        return {
          ...produtos,
          qtd: produtos.qtd - 1
        }
      }
      return produtos
    }).filter((produto) => produto.qtd > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <AppContainer>
        <Filtro
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nomeFilter={this.state.nomeFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangenomeFilter={this.onChangenomeFilter}                  
        />
        <Produtos 
          produtos={produtos}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nomeFilter={this.state.nomeFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <Carrinho
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
    );
  }
}

export default App;