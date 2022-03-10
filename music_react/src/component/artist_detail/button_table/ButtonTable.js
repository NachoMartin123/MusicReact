import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import {Button, Container, Row, Col} from 'react-bootstrap';
import {BsFillPauseFill, BsFillPlayFill} from "react-icons/bs";

import {nav_current_song, nav_current_artist} from '../../../redux/actions/navActions';


const ButtonTable = ({indice, artistName, song,nav_current_song, nav_current_artist, currentSong}) => {
    //const { indice, artistName, song } = useParams(); //hook para recoger params
    
    const [isHover, setIsHover] = useState(false);//initial state value
    const [isClicked, setIsClicked] = useState(false);

    useEffect( () => {
        if(currentSong.title!==song.title)
            setIsClicked(false);
    }, [currentSong])


    function onClickButton() {
        if(isClicked===true){
            //set_current_song({song}, {artistName});
            setIsClicked(false);
        }else if(isClicked===false)
            setIsClicked(true);

        nav_current_song(song);
        nav_current_artist(artistName);
        
    }

    function handleMouseIn() {
        setIsHover(true);
    }

    function handleMouseOut() {
        setIsHover(false);
    }

    return (
        <tr onClick={onClickButton} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            <td style={{textAlign:'center', width:'10%'}}>
                {
                    isClicked===true ? 
                        <BsFillPauseFill style={{stroke: currentSong.title!==song.title ? 'white': '#01ff95'}}/> 
                    : isHover===true && isClicked===false ? 
                        <BsFillPlayFill style={{stroke: currentSong.title!==song.title ? 'white': '#01ff95'}}/>
                    :  <span style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{indice+1}</span>
                }             
            </td>
            <td style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{song.title}</td>
            <td style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{song.album}</td>
            <td style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{song.duration}</td>          
        </tr>
    );
}


const mapStateToProps = (state, ownProps) => {

    return {
        indice: ownProps.indice,
        artistName: ownProps.artistName,
        song: ownProps.song,
        currentSong: state.navState.currentSong
    }
}

export default connect(
    mapStateToProps, 
    {nav_current_song, nav_current_artist}
)(ButtonTable);