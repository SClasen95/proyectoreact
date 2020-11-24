import React from "react";

class Resultado extends React.Component {

render(){
    var objetoJson = this.props.objeto;
    var arrayResultados = objetoJson.dataseries; 
    var p = "";
    /*var p = arrayResultados.map(datos => 
        <p>1 {this.state.monedaBase} equivale a {datos.conversion_rates.monedaAConsultar} {datos.monedaAConsultar}s</p>
        );*/
return(p);
}

}
export default Resultado;


