import React from "react";

class Historial extends React.Component {


    constructor(props) {

        super(props)
        this.state={
            opcionAnterior: this.props.opcionAnterior,
            historial: []
        }
    }
        static getDerivedStateFromProps(props, state){
 
            if(props.opcionAnterior === null){
                return null;
            }else{
                let siguienteOpcion = [...state.historial, props.opcionAnterior]
                return {
                    opcionAnterior: props.opcionAnterior,
                    historial: siguienteOpcion
                }           
            }
        }
    
render (){
    return (   
         
        <div className="recordatorio">
            <h2>Seleccion anterior: {this.state.opcionAnterior}</h2>
            <h2>Historial de opciones elegidas:</h2>
            <ul>
                {this.state.historial.map((opcion, index) => <li key={index}>{opcion}</li>)}    
            </ul>
         </div>
)
}
}

export default Historial;