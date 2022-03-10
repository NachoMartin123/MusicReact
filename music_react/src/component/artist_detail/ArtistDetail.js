import React, { useEffect } from 'react';
import { connect } from "react-redux";
import ButtonTable from "./button_table/ButtonTable";

import { useParams } from "react-router-dom";
import {get_artist_songs} from '../../redux/actions/apiActions';

import ButtonPlay from '../common/ButtonPlay';
import { Button, Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { BsClockFill } from "react-icons/bs";

import TiestoImg from '../../assets/top_artist/tiesto.png';

const Artist_detail = ({artistSongs, get_artist_songs}) => {
    const { artistName } = useParams(); //hook para recoger params

    useEffect( () => {
        get_artist_songs();
    }, [])

    return (
        <Container style={{paddingRight:'0', paddingLeft:'0'}}>
            <Row id="imgBackArtistDetail" style={{backgroundImage:`url(${TiestoImg})`}}>
                <h1 style={{paddingTop:'2em'}}>{artistName}</h1>
                <div>
                    <ButtonPlay/>
                    <p>Total songs: 23, total duartion: 4h 3min</p>
                </div>
            </Row>
            <Row id="tableArtistDetail">
                <Table responsive >
                    <thead>
                        <tr>
                            <th style={{textAlign:'center'}}>#</th>
                            <th>Name</th>
                            <th>Album</th>
                            <th ><BsClockFill/></th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            artistSongs && artistSongs.length > 0 ?
                                artistSongs.map((item, index) => {
                                    return <tr key={index}>
                                                <td style={{textAlign:'center', width:'10%'}} index={index}>
                                                    <ButtonTable indice={index} artistName={artistName} song={item}/>
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.album}</td>
                                                <td>{item.duration}</td>
                                            </tr> 
                                })
                                : <tr><td>No songs found</td></tr>
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        artistSongs: state.apiState.artistSongs
    };
};

export default connect(
    mapStateToProps, 
    {get_artist_songs}
)(Artist_detail);
