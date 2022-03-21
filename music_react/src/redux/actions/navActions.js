import * as types from './actionTypes'; 

export const nav_current_song = data => ({
    type: types.NAV_CURRENT_SONG,
    payload: {
        currentSong: data
    }
})

export const nav_current_artist = data => ({
    type: types.NAV_CURRENT_ARTIST,
    payload: {
        currentArtist: data
    }
})

export const nav_current_songList = data => ({
    type: types.NAV_CURRENT_SONGLIST,
    payload: {
        currentSongList: data
    }
})

export const nav_change_song_status = data => ({
    type: types.NAV_CHANGE_SONG_STATUS,
    payload: { 
        currentSongStatus: data.status
    }
})

export const nav_next_song = () => ({
    type: types.NAV_NEXT_SONG,
    payload: { 
        
    }
})

export const nav_previous_song = () => ({
    type: types.NAV_PREVIOUS_SONG,
    payload: { 
       
    }
})

export const nav_show_modal = (value) => ({
    type: types.NAV_SHOW_MODAL,
    payload: { 
       showModal: value
    } 
})


export const nav_current_videoclip = data => ({
    type: types.NAV_CURRENT_VIDEOCLIP,
    payload: {
        currentVideoclip: data
    }
})