import * as types from '../actions/actionTypes';

const initialState = {
    currentArtist:{
        artistName: '',
        totalSongs: '',
        totalMin: ''
    },
    currentSong: {
        nameSong: '',
        albumSong: '',
        duration: ''

    }
}

const navState = (state = initialState, action) => {
    
    switch (action.type) {
        case types.NAV_CURRENT_SONG: {
            return {
                ...state,
                currentSong: action.payload.currentSong,
            }
        }

        default: return state;
    }
}

export default navState;
