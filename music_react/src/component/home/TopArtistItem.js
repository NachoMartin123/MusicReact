import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import TiestoImg from '../../assets/top_artist/tiesto.png';

const TopArtistItem = ({}) => {

    return (
        <Container>
            <div id="backGrisFuerte-whiteBorder">
                <div col={3}  styles={{ backgroundImage:`url(${TiestoImg})` }}>
                    <Image src={TiestoImg} alt="Tiesto" style={{width:'100%'}}/>
                </div>
                <p>Artist name</p>
                <Button className="topArtistViewButton">Button</Button>
            </div>
      </Container>
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
)(TopArtistItem);