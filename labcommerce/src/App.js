import './App.css';
import React from 'react';
//import Filtros from './Components/Filtros';
import { Carrinho } from './Components/Carrinho/Carrinho';
import { Filters } from './Components/Filters/Filters';
import { Products } from './Components/Products/Products';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 4px;
  background-color: lightblue;
  
`;

const products = [
  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    price: 1000,
    photo: "https://picsum.photos/200/200?a=1"
  },
  {
    id: 2,
    name: "Foguete da Missão Apollo 12", 
    price: 2000, 
    photo: "https://picsum.photos/200/200?a=2"
  },
  {
    id: 3,
    name: "Foguete da Missão Apollo 13", 
    price: 4000, 
    photo: "https://picsum.photos/200/200?a=3"
  },
  {
    id: 4,
    name: "Foguete da Missão Apollo 14", 
    price: 5500, 
    photo: "https://picsum.photos/200/200?a=4"
  }
]

class App extends React.Component {
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: '',
    productsInCart: []
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
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





/*
class App extends React.Component {
  state = {
    CardProdutos: [
      { id: 1, 
        name: "Foguete da Missão Apollo 11", 
        price: 10000.0, 
        imageUrl: "https://picsum.photos/210/230" 
      },
      { 
        id: 2, 
        name: "Foguete da Missão Apollo 11", 
        price: 10000.0, 
        imageUrl: "https://picsum.photos/220/240" 
      },
      { 
        id: 3, 
        price: "Foguete da Missão Apollo 11", 
        value: 10000.0, 
        imageUrl: "https://picsum.photos/230/250" 
      },
      { 
        id: 4, 
        name: "Foguete da Missão Apollo 11", 
        value: 10000.0, 
        imageUrl: "https://picsum.photos/240/270" 
      },
    ],
    vlrMinimo: '',
    vlrMaximo: '',
    Buscar: '',

  }
  
   

render() {

    return (
  
  <div className="Container">
      <div className="Filtros">
        <h2>Filtros</h2>

        <label className='Label'><Filtros texto='Valor minimo:' />
          <input type="number" value="minimo" />
        </label>

        <label className='Label'> <Filtros texto='Valor maximo:' />
          <input type="number" value="maximo" />
        </label>


        <label className='Label'><Filtros texto='Busca por nome:' />
          <input type="Text" placeholder='Digite aqui' />
        </label>

      </div>
      <div className="GradeProdutos">
        <div className="box-pagina-principal">
          <img src="https://picsum.photos/400/440?a=1 " alt="" />
          <h4>titulo</h4>
        </div>
        <div className="box-pagina-principal">
          <img src="https://picsum.photos/400/450?a=1 " alt="" />
          <h4>titulo</h4>
        </div>
        <div className="box-pagina-principal">
          <img src="https://picsum.photos/400/460?a=1 " alt="" />
          <h4>titulo</h4>
        </div>
        <div className="box-pagina-principal">
          <img src="https://picsum.photos/400/470?a=1 " alt="" />
          <h4>titulo</h4>
        </div>
        <div className="box-pagina-principal">
          <img src="https://picsum.photos/400/410?a=1 " alt="" />
          <h4>titulo</h4>
        </div>

      </div>
      <div className="Carrinho">
        <Carrinho>
        produtoNoCarrinho={this.state.produtoNoCarrinho}
          removeProdutosDoCarrinho={this.removeProdutosDoCarrinho}
        </Carrinho>

        <h2>Carrinho</h2>
        <div className='item'>
          <p>1x</p>
          <p>produto</p>
          <button>remover</button>
        </div>
        <p>Valor: R$0, 00</p>
      </div>
    </div>
  );
}
}
export default App;

*/