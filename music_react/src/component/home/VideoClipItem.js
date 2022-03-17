import React, {  } from 'react';
import { connect } from 'react-redux';


import { useParams } from "react-router-dom";

import {Row} from 'react-bootstrap';

import { FiArrowUp } from "react-icons/fi";
import {BsArrowUp} from "react-icons/bs";

const VideoClipItem = ({songName, artistName, videoUrl, position, status}) => {
    
    return (
      <Row className="hotVideoItem centerElementsY centerElementsX" style={{width:'100%', height:'20%', marginBottom:'5%'}}>
          <div className="centerElementsY" style={{width:'20%'}}>
              <span>{position}</span>
              <hr style={{margin:'0', border:'3', opacity:'1'}}/>
              {
                    status=="up" ? 
                        <FiArrowUp style={{fontWeight:"bold", color:"green"}}/>
                    : <FiArrowUp style={{fontWeight:"bold", color:"red", transform: "rotate(180deg)"}}/>
              }
          </div>
          <div style={{width:'80%'}}>
                <p className='titleVideo' >{songName}</p>  
                <p className='artistNameVideo'>{artistName}</p>  
          </div>

      </Row>
    );
} 




const mapStateToProps = (state, ownProps) => {
    return {
        status: ownProps.status,
        songName: ownProps.songName, 
        artistName: ownProps.artistName, 
        videoUrl: ownProps.videoUrl, 
        position: ownProps.position

    }
}


export default connect(
    mapStateToProps, 
    {}
)(VideoClipItem);