import React from 'react';
import './App.css';
import Filtros from './components/filtros';
import Produtos from './components/produtos';
import Carrinho from './components/carrinho';





export default class App extends React.Component {
  // state = {
  //   listaProdutos: [

  //     { id: 1, name: "Foguete da Missão Apollo 11", value: 10000.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 2, name: "Foguete da Missão Apollo 1", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 3, name: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 4, name: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 5, name: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 6, name: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },
  //   ],
  //   vlrMinimo: '',
  //   vlrMaximo: '',


  // }





  render() {
    return (
      <div>
        <img src="https://picsum.photos/200/200"/>
        <h2>teeste</h2>
        <Produtos />
        <Filtros texto={"testes"}/>
        <Carrinho />






      </div>
    );
  }

}
