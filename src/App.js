import React from 'react';
import './App.css';
import Filtros from './Components/filtros';
import Produtos from './Components/produtos';
import Carrinho from './Components/carrinho';





export default class App extends React.Component {
  // state = {
  //   listaProdutos: [

  //     { id: 1, nome: "Foguete da Missão Apollo 11", value: 10000.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 2, nome: "Foguete da Missão Apollo 1", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 3, nome: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 4, nome: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 5, nome: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },

  //     { id: 6, nome: "pollo ", value: 1.0, imageUrl: "https://picsum.photos/200/200" },
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
        <Filtros texto="testes"/>
        <Carrinho />






      </div>
    );
  }

}
