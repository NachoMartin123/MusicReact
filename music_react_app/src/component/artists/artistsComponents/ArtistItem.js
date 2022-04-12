import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Image from 'react-bootstrap/Image';

import DefaultImg from '../../../assets/artistPictures/default.png';
import backVolumen from '../../../assets/artists/backVolumen.png';

import {Link} from 'react-router-dom';

const Artistitem = (props) => {
    const [profileIMG, setProfileIMG] = useState();

    useEffect( () => {
        loadImage();

    }, [])

    function loadImage () {//set img dinamiclly
         try{
            const images = require.context('../../../assets/artistPictures', true);
            setProfileIMG(images('./' +props.nombre.toLowerCase().replace(/\s/g, '_')+'.jpg'));
        }catch{
            setProfileIMG(DefaultImg);
        } 
      };

    return (
        <div className="resizeArtistItem">
            <div className="centerElementsX artistItemImgContainer" 
            style={{backgroundImage:`url(${backVolumen})`}}>
                <Image src={profileIMG} alt={props.nombre} />
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

export default connect(
    mapStateToProps, 
    {}
)(Artistitem);