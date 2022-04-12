import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {Row} from 'react-bootstrap';

import { FiArrowUp } from "react-icons/fi";

import {nav_set_current_videoclip} from "../../../../redux/actions/navActions";

const VideoClipItem = ({songName, artistName, videoUrl, position, status, nav_set_current_videoclip}) => {

    useEffect(() => {
         if(position==1)
            nav_set_current_videoclip({
                songName: songName, 
                artistName: artistName,
                videoUrl: videoUrl
            }); 
    }, []);

    function onClickItem(){
        nav_set_current_videoclip({
            songName: songName, 
            artistName: artistName,
            videoUrl: videoUrl
        });
    }
    
    return (
      <Row onClick={onClickItem} className="hotVideoItem centerElementsY centerElementsX" style={{width:'100%', height:'20%', marginBottom:'5%'}}>
          <div className="centerElementsY" style={{margin:"auto", width:'20%'}}>
              <span >{position}</span>
              <hr style={{margin:'0', border:'3', opacity:'1'}}/>
              {
                    status==="up" ? 
                        <FiArrowUp style={{fontWeight:"bold", color:"green"}}/>
                    : <FiArrowUp style={{fontWeight:"bold", color:"red", transform: "rotate(180deg)"}}/>
              }
          </div>
          <div style={{width:'80%'}} >
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
    {nav_set_current_videoclip}
)(VideoClipItem);