import React , { Component } from 'react';
import './style.css';
import { Card } from 'primereact/card';
import { Button} from 'primereact/button';

class CardNota extends Component {

    constructor( props ){
        super( props );
    }

    apagar(){
        this.props.apagarNota(this.props.indice);
    }

    render() { 

        const footer = (
            <span>
                <Button 
                    label="Excluir" 
                    icon="pi pi-times" 
                    className="p-button p-component p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2 p-button-icon-only"  
                    onClick={this.apagar.bind(this)}/>
            </span>
        );

        return (<>
            <Card 
                title={this.props.titulo} 
                subTitle={this.props.categoria}
                footer={footer} 
                style={{ width: '25em' }}
                className="p-shadow-4">
                <p className="p-m-0" style={{lineHeight: '1.5'}}>{this.props.texto}</p>
            </Card>
        </>)
    }
}
 
export default CardNota;