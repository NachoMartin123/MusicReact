import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//import apiState from '../../redux/reducers/apiReducer';
import {get_artist_names} from '../../redux/actions/apiActions';

import {Container, Row} from 'react-bootstrap';
import SearchBar from './search_bar/SearchBar';
import ArtistItem from './artist_item/ArtistItem';


const Artists = ({artistsNames, get_artist_names, artistsFilter}) => {

    useEffect( () => {
        get_artist_names({artistsFilter});  //llama a Action
    }, [])

    return (
      <div id="artists">
          <h1 id="titleArtists">ARTISTS</h1>
          <SearchBar artistFilter={artistsFilter}/>
          <Container style={{marginBottom:'10em'}}>
                <Row>
                    {
                    artistsNames && artistsNames.length ?
                        artistsNames.map((item, index) => {
                            return <ArtistItem nombre= {item.nombre} key={index}/>
                        })
                        : 'no se ha leido artistNames'
                    }
                </Row>
          </Container>
      </div>
    );
}


const mapStateToProps = (state) => {
    return {
        artistsNames: state.apiState.artistsNames,
        artistsFilter: state.navState.artistsFilter
    }
}

export default connect(
    mapStateToProps, 
    {get_artist_names}
)(Artists);