import './assets/App.css';

import React , { Component } from 'react';
 
import ListaDeNotas from './components/ListaDeNotas' ;
import FormularioCadastro from './components/FormularioCadastro' ;

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {

  constructor( props ){
    super( props );
    this.state = {
      notas: []
    };
  }

  criarNota( titulo , texto ){
    console.log(`Uma nova nota foi criada. Titulo: ${titulo} e Nota: ${texto}`);
    const novaNota = { titulo , texto } ;
    //using spread operation `...` to copy array values to new array ... 
    const novoNotas = [...this.state.notas,novaNota];
    const novoEstado = {
      notas: novoNotas
    };
    this.setState(novoEstado);
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    )
  }
}

export default App;
