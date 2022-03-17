import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import {BsFillPauseFill, BsFillPlayFill} from "react-icons/bs";

import {nav_current_song, nav_current_artist, nav_current_songList, nav_change_song_status} from '../../../redux/actions/navActions';


const ButtonTable = ({indice, artistName, song,nav_current_song, nav_current_artist, currentSong, 
    artistSongs, nav_current_songList, nav_change_song_status}) => {

    const [isHover, setIsHover] = useState(false);//initial state value
    const [isClicked, setIsClicked] = useState(false);

    useEffect( () => {
         if(currentSong.title!==song.title){         
            setIsClicked(false); // only the currentSong can have icons (has focus)
        }else{
            if(currentSong.status==="play") //changes from Footer buttons 
                setIsClicked(false); 
            else
                setIsClicked(true);
        }
    }, [currentSong])  

    function onClickButton() {

        nav_current_song(song);
        nav_current_artist(artistName);
        nav_current_songList(artistSongs);

        //change song, set play by default
 

        if(currentSong.status==="play"){//currentSong not changed, chaged status
            setIsClicked(true);
            nav_change_song_status({status:"pause"});
        }else if(currentSong.status==="pause"){
            setIsClicked(false);
            nav_change_song_status({status:"play"});
        }

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
                        <BsFillPauseFill style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}/> 
                    : isHover===true && isClicked===false ? 
                        <BsFillPlayFill style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}/>
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
        currentSong: state.navState.currentSong,
        artistSongs: state.apiState.artistSongs
    }
}

export default connect(
    mapStateToProps, 
    {nav_current_song, nav_current_artist, nav_current_songList, nav_change_song_status}
)(ButtonTable);