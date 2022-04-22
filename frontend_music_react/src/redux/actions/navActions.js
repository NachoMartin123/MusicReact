import * as types from './actionTypes'; 

export const nav_set_current_song = data => ({
    type: types.NAV_SET_CURRENT_SONG, 
    payload: {
        currentSong: data
    }
})

export const nav_set_current_artist = data => ({
    type: types.NAV_SET_CURRENT_ARTIST,
    payload: {
        currentArtist: data
    }
})

export const nav_set_current_songList = data => ({
    type: types.NAV_SET_CURRENT_SONGLIST,
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


export const nav_set_current_videoclip = data => ({
    type: types.NAV_SET_CURRENT_VIDEOCLIP,
    payload: {
        currentVideoclip: data
    }
})

export const nav_set_volume = data => ({
    type: types.NAV_SET_VOLUME,
    payload: {
        volume: data
    }
})

export const nav_set_footer_show = data => ({
    type: types.NAV_SET_FOOTER_SHOW,
    payload: {
        footerShow: data
    }
})

export const nav_set_song_current_seconds = data => ({
    type: types.NAV_SET_SONG_CURRENT_SECONDS,
    payload: {
        currentSeconds: data
    }
})

