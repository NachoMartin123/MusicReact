import React, { Component , useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import TiestoImg from '../../assets/artistPictures/tiesto.jpg';
import backColors from '../../assets/home/top_artist/backColors.png';


import { useNavigate } from "react-router-dom";

const TopArtistItem = (props) => {
    const navigate = useNavigate();

    function goDetail() {
        var normalizeName = "/artist_detail/"+props.artistName;
        navigate(normalizeName);
    }

    return (
        <Container>
            <div className="centerElementsX topArtImgContainer" 
            style={{backgroundImage:`url(${backColors})`}}>
                <Image src={require(`../../assets/artistPictures/${props.artistName.toLowerCase().replace(/\s/g, '_')}.jpg`)} alt={props.artistName} />
            </div>
            <div  className="backPanelTopArt">
                <p style={{textAlign:'center'}}>{props.artistName} </p>
                <Button onClick={goDetail} className="topArtistViewButton">VIEW</Button>
            </div>
        </Container>
    );
}




const mapStateToProps = (state) => {
    return {

    }
}

//recibe un “state” y obtiene las propiedades de este que vaya a utilizar el componente
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