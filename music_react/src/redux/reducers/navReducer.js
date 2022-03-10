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
        duration: '' 
    }
}

const navState = (state = initialState, action) => {
    
    switch (action.type) {
        case types.NAV_CURRENT_SONG: {
            return {
                ...state,
                currentSong: action.payload.currentSong
            }
        }

        case types.NAV_CURRENT_ARTIST: {
            return {
                ...state,
                currentArtist: {...state.currentArtist, artistName: action.payload.currentArtist}
            }
        }

        default: return state;
    }
}

export default navState;
