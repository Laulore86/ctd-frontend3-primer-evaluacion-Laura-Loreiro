import React from "react";
import Historial from "./Historial";
import Opcion from "./Opcion";
import data from "./data.json"

class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cuento: data[0],
            opciones: [data[0].opciones.a, data[0].opciones.b],
            count: 1,
            opcion: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if(this.state.count < 5){
            let idConOpcion = String(this.state.count + 1) + e.target.value.toLowerCase();
            let historia = data.find(e => e.id === idConOpcion)
            this.setState(prevstate => ({ 
                count: prevstate.count + 1,
                cuento: historia,
                opciones: [ historia.opciones.a, historia.opciones.b],
                opcion: e.target.value
            }));
        }else{
            alert("Fin")
        }
    }



    render (){

        return (
            <div className="layout">
                <h2 className="historia">{this.state.cuento.historia}</h2>
                <div className="opciones">
           
                    {this.state.opciones.map((elemento, index) => <Opcion key={index} texto={index? "B" : "A"} opcion={elemento} onClick={this.handleClick}/> )}
                </div>
                    <Historial opcionAnterior={this.state.opcion}/>
            </div>
        )
    }
}

export default Layout;