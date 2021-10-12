import React, { Component } from 'react';
import './Conversor.css'

export default class Conversor extends Component {
    constructor(props) {
        super(props); //acessando as propriedades pega do app.js

        this.state = {
            moedaA_valor: "", //valor da moeda
            moedaB_valor: 0 //valor transformado
        }

        this.converterMoeda = this.converterMoeda.bind(this);
    }

    converterMoeda(){ //metodo de converter a moeda
        let moeda_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${moeda_para}&compact=ultra&apiKey=0d7d4095696e105c8fc7`

        fetch(url)
        .then(res => {
            return res.json();

        })
        .then(json => {
            let cotacao = json[moeda_para];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor + cotacao).toFixed(2));
            this.setState({moedaB_valor})
        })
    }
    render() {
        return (
            <div className="conversorMoeda">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2> 
                <input type="text" onChange={(event) => this.setState({moedaA_valor:event.target.value})}></input>
                <button type="button"  value="converterMoeda" onClick =  {this.converterMoeda}>Converter</button>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        );
    }
}
