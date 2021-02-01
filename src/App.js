import './assets/App.css';

import React , { Component } from 'react';
 
import ListaDeNotas from './components/ListaDeNotas' ;
import FormularioCadastro from './components/FormularioCadastro' ;
import ListaDeCategorias from './components/ListaDeCategorias' ;

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

class App extends Component {

  constructor( props ){
    super( props );
    this.state = {
      notas: [] ,
      categorias: ["ABC","DEF"]
    };
  }

  criarNota( titulo , texto , categoria ){
    console.log(`Uma nova nota foi criada. Titulo: ${titulo} e Nota: ${texto}`);
    const novaNota = { titulo , texto , categoria } ;
    //using spread operation `...` to copy array values to new array ... 
    const novoNotas = [...this.state.notas,novaNota];
    const novoEstado = { ...this.state , 
      notas: novoNotas
    };
    this.setState(novoEstado);
  }

  deletarNota( indice ){
    console.log("Deletando nota...");
    let notasArray = this.state.notas;
    notasArray.splice(indice,1);
    this.setState({
      notas: notasArray
    });
  }

  criarCategoria( categoria ){
    const novaCategia = categoria ;
    const novaCategorias = [...this.state.categorias,novaCategia];
    const novoEstado = { ...this.state , categorias: novaCategorias }; 
    this.setState(novoEstado);
  }

  render(){
    return (
      <div className="p-fluid p-grid">
        <div className="p-col-3">
            <FormularioCadastro 
              categorias={this.state.categorias}
              criarNota={this.criarNota.bind(this)} />
        </div>
        <div className="p-col-9">
            <div className="p-col-12">
              <ListaDeCategorias 
                adicionarCategoria={this.criarCategoria.bind(this)}
                categorias={this.state.categorias}/>
            </div>
            <div className="p-col-12">
              <ListaDeNotas
                apagarNota={this.deletarNota.bind(this)} 
                notas={this.state.notas}/>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
