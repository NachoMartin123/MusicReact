import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import TiestoImg from '../../../assets/top_artist/tiesto.png';
import backVolumen from '../../../assets/artists/backVolumen.png';

import {Link} from 'react-router-dom';

const Artistitem = (props) => {

    return (
        <div className="resizeArtistItem">
            <div className="centerElementsX artistItemImgContainer" 
            style={{backgroundImage:`url(${backVolumen})`}}>
                <Image src={TiestoImg} alt={props.nombre} />
            </div>
            <Link to={{
                    pathname:'/artist_detail/'+props.nombre, 
                }}
                className="centerElementsX">{props.nombre}
            </Link>
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
)(Artistitem);