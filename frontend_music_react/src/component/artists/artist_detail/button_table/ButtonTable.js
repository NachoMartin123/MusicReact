import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import {Button, Image,  Container, Row, Col, Offcanvas} from 'react-bootstrap';

import {BsFillFileEarmarkMusicFill, BsFillCircleFill, BsFillPauseFill, BsFillPlayFill} from "react-icons/bs";

import {nav_set_current_song, nav_set_current_artist, nav_set_current_songList, nav_change_song_status} from '../../../../redux/actions/navActions';
import useViewport from "../../../../hooks/useViewport";

const ButtonTable = ({indice, artistName, song,nav_set_current_song, nav_set_current_artist, currentSong, 
    artistSongs, nav_set_current_songList, nav_change_song_status}) => {
    const { heightViewport, widthViewport } = useViewport();

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

        nav_set_current_song(song);
        nav_set_current_artist(artistName);
        nav_set_current_songList(artistSongs);

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
        <tr onClick={onClickButton} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} >
                <td className="styleTdWebView" style={{textAlign:'center', fontSize:"16px"}}>
                    {
                        isClicked===true ? 
                            <BsFillPauseFill style={{textAlign:'center', color: currentSong.title!==song.title ? 'white': '#01ff95'}}/> 
                        : isHover===true && isClicked===false ? 
                            <BsFillPlayFill style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}/>
                        :  <span style={{textAlign:'center', color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{indice+1}</span>
                    }
                </td>
            {
                widthViewport >= 480 ? 
                <>

                    <td className="styleTdWebView" style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>
                        <Row>
                            <Col xs={1} sm={1} style={{alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                                <BsFillFileEarmarkMusicFill style={{height:"2em", width:"2em", marginTop:"0.25em", stroke:"black"}}/>
                                {/* <Image style={{border: "1px solid black"}}></Image>    */}          
                            </Col>
                            <Col>
                                <p style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{song.title}</p>
                                <p style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{song.album.artist.nombre}</p>
                            </Col>
                        </Row>
                    </td>
                    <td className="styleTdWebView" style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{song.album.nombre}</td>
                    <td className="styleTdWebView" style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>{song.duration}</td>          
                </>

                :   <>
                        <td style={{color: currentSong.title!==song.title ? 'white': '#01ff95'}}>
                            <div className="mobileSongList">
                                <p>{song.title}</p>
                                <p>{song.album.artist.nombre}<BsFillCircleFill/>{song.album.nombre}</p>
                            </div>
                        </td>
                    </> 
            }        
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
    {nav_set_current_song, nav_set_current_artist, nav_set_current_songList, nav_change_song_status}
)(ButtonTable);