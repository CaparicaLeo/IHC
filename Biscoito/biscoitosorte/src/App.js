import React, { Component } from 'react';
import './assets/estilo.css';
import img1 from './assets/img1.jpg';
import img2 from'./assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';

//import biscoito from './assets/biscoito.png'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //textoFrase: ' '
            imagemAtual: ' '
        };
        //this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
        this.mostrarImagem = this.mostrarImagem.bind(this);
        /*this.frases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realiza o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];*/

        this.imagens =[
            img1, img2, img3, img4
        ];
    }

    /*quebrarBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[numeroAleatorio];
        this.setState(state);
    }*/

    mostrarImagem(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random()*this.imagens.length);
        state.imagemAtual = this.imagens[numeroAleatorio];
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <Botao acao={this.mostrarImagem} nome='Gerar imagem'/>
                <img src={this.state.imagemAtual}/>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acao}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;