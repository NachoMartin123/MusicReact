import * as types from './actionTypes'; 

/*
export const nav_click = data => ({
    type: types.NAV_CLICK,
    payload: {
        title: data.title,
    }
})
*/

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

