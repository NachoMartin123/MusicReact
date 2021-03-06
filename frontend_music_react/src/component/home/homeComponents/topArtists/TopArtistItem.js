import React, { } from 'react';
import { connect } from 'react-redux';

import {Button, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import backColors from '../../../../assets/home/top_artist/backColors.png';


import { useNavigate } from "react-router-dom";

const TopArtistItem = (props) => {
    const navigate = useNavigate();

    function goDetail() {
        var normalizeName = "/artist_detail/"+props.artistName;
        navigate(normalizeName);
    }

    return (
        <Container className="resizeMobileTopArtist">
            <div className="centerElementsX topArtImgContainer" 
            style={{backgroundImage:`url(${backColors})`}}>
                <Image src={require(`../../../../assets/artistPictures/${props.artistName.toLowerCase().replace(/\s/g, '_')}.jpg`)} alt={props.artistName} />
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

export default connect(
    mapStateToProps, 
    {}
)(TopArtistItem);