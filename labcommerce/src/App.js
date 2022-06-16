import './App.css';
import React from 'react';
import Filtros from './Components/Filtros';


class App extends React.Component {
  state = {
    CardProdutos: [
      { id: 1, name: "Foguete da Missão Apollo 11", value: 10000.0, imageUrl: "https://picsum.photos/200/200" },
      { id: 2, name: "Foguete da Missão Apollo 11", value: 10000.0, imageUrl: "https://picsum.photos/200/200" },
      { id: 3, name: "Foguete da Missão Apollo 11", value: 10000.0, imageUrl: "https://picsum.photos/200/200" },
      { id: 4, name: "Foguete da Missão Apollo 11", value: 10000.0, imageUrl: "https://picsum.photos/200/200" },
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
          <div className="box-pagina-principal" >
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>titulo</h4>
          </div>
          <div className="box-pagina-principal" >
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>titulo</h4>
          </div>
          <div className="box-pagina-principal" >
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>titulo</h4>
          </div>
          <div className="box-pagina-principal" >
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>titulo</h4>
          </div>
          <div className="box-pagina-principal" >
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>titulo</h4>
          </div>

        </div>
        <div className="Carrinho">

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
