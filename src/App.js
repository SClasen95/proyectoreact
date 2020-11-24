import React from 'react';
import './App.css';
import Resultado from './resultado.js';
const request = require('request-promise');
const convertir = require("./libraryCurrency.js");
var conversion = function (moneda,monedaAConvertir,monedaBase) {
  var conversionRates = moneda.conversion_rates[monedaAConvertir];
  console.log("1 "+monedaBase+" equivale a "+conversionRates+" "+monedaAConvertir);
  //this.state.print=true;   //por algun motivo esto hace q el print salga doble?
  this.conversionRates=conversionRates;
}

class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      monedaBase: "USD",
      monedaAConsultar: "ARS",
      print: true
    }
    this.API = this.getAPI.bind(this);
    }
    
  getAPI(){
    convertir(this.state.monedaBase)
    .then((m) => {
      conversion(m,this.state.monedaAConsultar,this.state.monedaBase);
    }).catch((err) => {
      console.log(err);
    });
  }

  render(){ 
    let resultado;
    resultado =  <Resultado conversionRates={this.state.conversionRates} monedaBase={this.state.monedaBase} monedaAConsultar={this.state.monedaAConsultar}/> 
    console.log(this.state.conversionRates);


    return (
      <div className="App">
      <header className="App-header">
      <label>Convertir de:</label>
        <input type="text" name="mb" value={this.state.monedaBase} onChange={event => this.setState({monedaBase:event.target.value})}/>
        <br></br>
        <label>Convertir a:</label>
        <input type="text" name="mac" value={this.state.monedaAConsultar} onChange={event => this.setState({monedaAConsultar:event.target.value})}/>
        <br></br>
        <button onClick={this.API} className="btn btn-primary m-1">Consultar</button>
        <div>
          {resultado}
        </div>
        </header>
    </div>
    );
  }
}
export default App;
