import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button' ;


class ListaDeCategorias extends Component {

    _handleEventoCagetoriaTextInput( evento ){
        if( evento.key === "Enter" ){
            this.props.adicionarCategoria( evento.target.value );
        }
    }

    constructor(props) {
        super(props);
        //this.state = {  }
    }
    
    render() { 
        return (
            <div>
                <div className="p-d-flex p-p-2 card">
                    <InputText 
                        id="categoria" 
                        placeholder="Digite uma categoria..." 
                        className="p-mr-2 p-mb-2" 
                        onKeyUp={this._handleEventoCagetoriaTextInput.bind(this)}></InputText>
                    <Button type="Button" id="incluirCategoria" icon="pi pi-plus p-c" className="p-button p-component p-button-rounded p-button-outlined p-mr-2 p-mb-2 p-button-icon-only" value="Incluir"></Button>
                </div>
                <div className="p-d-flex">
                    {this.props.categorias.map( ( categoria , index ) => {
                        return <div key={index} className="p-mr-2 p-shadow-4"><p>{categoria}</p></div>
                    })}
                </div>
            </div>
        );
    }
}

export default ListaDeCategorias;
