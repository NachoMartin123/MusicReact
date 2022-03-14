import * as types from '../actions/actionTypes';

const initialState = {
    currentArtist:{
        artistName: '',
        totalSongs: '',
        totalMin: ''
    },
    currentSong: {
        title: '',
        artist:'', 
        album: '',
        duration: '',
        status:'pause'
    },
    currentSongList: []
}


function getNextOrPreviousSong(value, currentSongList, currentSong){
    try{
        var indexCurrentSong = currentSongList.findIndex(function(item, i){
            return item.title === currentSong.title
        });

        if(indexCurrentSong===-1)
            throw "error no current song";

        if(value<0){//previous song
            if(indexCurrentSong===0)//first song
                return currentSongList[currentSongList.length-1];
            return currentSongList[indexCurrentSong-1];;
        }else{//next song
            if(currentSongList.length===indexCurrentSong+1)//last song
                return currentSongList[0];
            return currentSongList[indexCurrentSong+1];
        }
    }catch (error){//currentSongList is empty/undefined
        return {title: '',
                artist:'', 
                album: '',
                duration: '',
                status:'play'}; 
    }
}


const navState = (state = initialState, action) => {
    
    switch (action.type) {
        case types.NAV_CURRENT_SONG: {
            return {
                ...state,
                currentSong: {
                    ...state.currentSong, 
                        title: action.payload.currentSong.title,
                        artist: action.payload.currentSong.artist,
                        album: action.payload.currentSong.album,
                        duration: action.payload.currentSong.duration
                }
            }
        }

        case types.NAV_CURRENT_ARTIST: {
            return {
                ...state,
                currentArtist: {
                    ...state.currentArtist, 
                        artistName: action.payload.currentArtist
                }
            }
        }
        
        case types.NAV_CURRENT_SONGLIST: {
            return {
                ...state,
                currentSongList: action.payload.currentSongList
            }
        }

        case types.NAV_CHANGE_SONG_STATUS: {
            return {
                ...state,
                currentSong: {
                    ...state.currentSong, 
                        status: action.payload.currentSongStatus
                }
            }
        }

        case types.NAV_PREVIOUS_SONG: {
            return {
                ...state,
                currentSong: getNextOrPreviousSong(-1, state.currentSongList, state.currentSong),  
            }
        }

        case types.NAV_NEXT_SONG: {
            return {
                ...state,
                currentSong: getNextOrPreviousSong(1, state.currentSongList, state.currentSong),              
            }
        }

        default: return state;
    }
}

export default navState;
