import React, { Component } from 'react';
import { connect } from 'react-redux';


import {Button, Container, Row, Col} from 'react-bootstrap';
import {BsArrowUp} from "react-icons/bs";

const VideoClipItem = ({}) => {

    return (
      <Row className="backGrisFuerteHotVideo centerElementsY centerElementsX" style={{width:'100%', marginBottom:'1em'}}>
          <div className="centerElementsY" style={{width:'20%'}}>
              <span>1</span>
              <hr style={{margin:'0', border:'3', opacity:'1'}}/>
              <BsArrowUp/>
          </div>
          <div style={{width:'80%'}}>
                <p className='centerElementsY'>Song name - artist</p>  
          </div>
      </Row>
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
)(VideoClipItem);