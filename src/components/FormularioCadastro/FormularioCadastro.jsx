import React , { Component } from 'react' ;

import { InputText } from 'primereact/inputtext' ;
import { InputTextarea } from 'primereact/inputtextarea' ;
import { Button } from 'primereact/button' ;
import { Dropdown } from 'primereact/dropdown' ;

import './style.css';


class FormularioCadastro extends Component {

    constructor( props ){
        super( props );
        this._categoria = "" ;
        this._titulo = "" ;
        this._nota  = "";
        this.state = {
        }
    }

    _handleMudancaTitulo( evento ){
        if( console ) console.log( evento.target.value );
        evento.stopPropagation();
        this._titulo = evento.target.value;
    }

    _handleMudancaNota( evento ){
        if( console ) console.log( evento.target.value );
        evento.stopPropagation();
        this._nota = evento.target.value;
    }

    _handleMudancaCategoria( evento ){
        evento.stopPropagation();
        //this.setCategoria( evento.target.value );
        this._categoria = evento.target.value;
        this.setState({});
    }

    _criarNota( evento ){
        if( console ) console.log(`Uma nova nota será criada com titulo ${this._titulo}`);
        evento.preventDefault();
        //stop propagation in dom elements ....
        evento.stopPropagation();
        this.props.criarNota( this._titulo , this._nota , this._categoria );

    }




    render(){

        const categoriasSelectItems = this.props.categorias.map( ( categoria , index ) => {
            return { label: categoria , value: categoria };
        });

        return (
            <>
                <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                    
                    <div className="p-fluid p-formgrid p-grid">

                        <span className="p-field p-fluid p-col-12">
                            <label htmlFor="categoria">Categoria</label>
                            <Dropdown 
                                id="categoria"
                                value={this._categoria}
                                options={categoriasSelectItems}
                                aria-describedby="categoria-help"
                                onChange={this._handleMudancaCategoria.bind(this)}/>
                            <small id="categoria-help">Selecione uma categoria para seu cartão.</small>
                        </span>


                        <span className="p-field p-fluid p-col-12">
                            <label htmlFor="titulo">Título</label>
                            <InputText 
                                id="titulo" 
                                onChange={this._handleMudancaTitulo.bind(this)}
                                aria-describedby="titulo-help"/>
                            <small id="titulo-help">Digite um titulo para seu cartão.</small>
                        </span>

                        <span className="p-field p-fluid p-col-12">
                            <label htmlFor="nota">Criar Nota</label>
                            <InputTextarea
                                rows={15} 
                                id="nota" 
                                className=""
                                onChange={this._handleMudancaNota.bind(this)}
                                aria-describedby="nota-help"/>
                            <small id="nota-help">Digite uma nota para seu cartão</small>
                        </span>

                        <div className="p-fluid p-col-12">
                            <Button 
                                label="Incluir" 
                                icon="pi pi-plus" 
                                iconPos="right" 
                                className="form-cadastro_input form-cadastro_submit"></Button>
                        </div>
                        
                    </div>

            </form>   
          </>     
        )
    }

}

export default FormularioCadastro;