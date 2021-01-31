import React , { Component } from 'react' ;

import { InputText } from 'primereact/inputtext' ;
import { InputTextarea } from 'primereact/inputtextarea' ;
import { Button } from 'primereact/button' ;

import './style.css';


class FormularioCadastro extends Component {

    constructor( props ){
        super( props );
        this._titulo = "";
        this._nota = "" ;
    }

    setTitulo( titulo ){
        this._titulo = titulo;
    }

    setNota( nota ){
        this._nota = nota;
    }


    _handleMudancaTitulo( evento ){
        if( console ) console.log( evento.target.value );
        evento.stopPropagation();
        this.setTitulo( evento.target.value );
    }

    _handleMudancaNota( evento ){
        if( console ) console.log( evento.target.value );
        evento.stopPropagation();
        this.setNota( evento.target.value );
    }

    _criarNota( evento ){
        if( console ) console.log(`Uma nova nota será criada com titulo ${this._titulo}`);
        evento.preventDefault();
        //stop propagation in dom elements ....
        evento.stopPropagation();
        this.props.criarNota( this._titulo , this._nota );
    }


    render(){
        return (
            <>
                <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                    <span className="p-float-label form-cadastro_input">
                        <InputText 
                            id="titulo" 
                            className="form-cadastro_input" 
                            onChange={this._handleMudancaTitulo.bind(this)}/>
                        <label htmlFor="titulo">Título</label>
                    </span>
                    <span className="p-float-label form-cadastro_input">
                        <InputTextarea
                            rows={15} 
                            id="nota" 
                            className="form-cadastro_input"
                            onChange={this._handleMudancaNota.bind(this)}/>
                        <label htmlFor="nota">Criar Nota</label>
                    </span>
                    <Button 
                        label="Incluir" 
                        icon="pi pi-plus" 
                        iconPos="right" 
                        className="form-cadastro_input form-cadastro_submit"></Button>
            </form>   
          </>     
        )
    }

}

export default FormularioCadastro;