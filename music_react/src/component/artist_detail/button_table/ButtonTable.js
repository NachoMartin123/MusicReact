import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import {Button, Container, Row, Col} from 'react-bootstrap';
import {BsFillPauseFill, BsFillPlayFill} from "react-icons/bs";

import {nav_current_song, nav_current_artist} from '../../../redux/actions/navActions';


const ButtonTable = ({indice, artistName, song,nav_current_song, nav_current_artist}) => {
    //const { indice, artistName, song } = useParams(); //hook para recoger params
    
    const [isHover, setIsHover] = useState(false);//initial state value
    const [isClicked, setIsClicked] = useState(false);

    function onClickButton() {
        if({isClicked}===true){
            //set_current_song({song}, {artistName});
            setIsClicked(false);
        }else if({isClicked}===false)
            setIsClicked(true);
        nav_current_song(song);
        nav_current_artist(artistName);
        //console.log(isClicked);
    }

    function handleMouseIn() {
        setIsHover(true);
    }

    function handleMouseOut() {
        setIsHover(false);
    }

    return (
        <div>
            <Button className="ButtonTable" onClick={onClickButton} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                {
                    /* isClicked ? 
                        <BsFillPauseFill/> 
                    : isHover && isClicked==false ? 
                        <BsFillPlayFill/>
                    : */ indice+1
                }             
            </Button>          
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {

    return {
        indice: ownProps.indice,
        artistName: ownProps.artistName,
        song: ownProps.song
    }
}

export default connect(
    mapStateToProps, 
    {nav_current_song, nav_current_artist}
)(ButtonTable);