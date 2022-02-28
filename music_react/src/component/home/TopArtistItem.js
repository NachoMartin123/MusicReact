import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import TiestoImg from '../../assets/top_artist/tiesto.png';
import backColors from '../../assets/top_artist/backColors.png';

const TopArtistItem = (props) => {

    return (
        <Container>
            <div className="centerElementsX topArtImgContainer" 
            style={{width:'90%', position: 'relative', zIndex: '2' , backgroundImage:`url(${backColors})`}}>
                <Image src={TiestoImg} alt={props.artistName} style={{width:'75%', margin:'15% 20% 10% 20%', borderRadius:'5px'}}/>
            </div>
            <div  className="backGrisFuerteTopArt whiteBorder moveChildOnParent"
                style={{position: 'relative', zIndex: '1' }}>
                <p style={{textAlign:'center'}}>{props.artistName} </p>
                <Button className="topArtistViewButton">VIEW</Button>
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