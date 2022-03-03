import React from 'react';
import { connect } from 'react-redux';

import { useParams } from "react-router-dom";

const Artist_detail = ({props}) => {

    const { artistName } = useParams();//hook para recoger params

    return (
      <div>
          <h1>Estamos en Artist detail de { artistName }</h1>
      </div>
    );
}




const mapStateToProps = (state) => {
    return {

    }
}

/*recibe un “state” y obtiene las propiedades de este que vaya a utilizar el componente */
const mapDispatchToProps = {}

/**
 * La función connect() de la librería React Redux genera un componente 
 * que utiliza store.subscribe() para leer una parte del árbol de estado 
 * en Redux y suministrar los props a un componente de presentación que 
 * renderiza
 */
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Artist_detail);