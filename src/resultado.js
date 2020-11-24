import React from "react";

class Resultado extends React.Component {

    render(){
        console.log(this.props.conversionRates);
        return <p>1 {this.props.monedaBase} equivale a {this.props.conversionRates} {this.props.monedaAConsultar}</p>
    }

}
export default Resultado;


