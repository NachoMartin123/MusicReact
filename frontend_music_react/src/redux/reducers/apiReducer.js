import * as types from '../actions/actionTypes';

const initialState = {
    //topArtists: [],
    //news:[],
    //hotVideoClips:[],  
    artistsNames: [],
    artistSongs:[],
    isArtistCreated: false,
    artistsFilter: '',
    loading: false
}

function filterArtistNames(oldArtitstNames, nameFilter) {
    let filteredArtistsNames = oldArtitstNames;
    if (typeof nameFilter !== "undefined")
        filteredArtistsNames = oldArtitstNames.filter(artist => artist.nombre.toLowerCase().includes(nameFilter));
    return filteredArtistsNames;
}


const apiState = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ARTISTS_NAMES: {
            return {
                ...state,
                artistsFilter: action.payload.artistsFilter,
                artistsNames: filterArtistNames(action.payload.artistsNames.data, action.payload.artistsFilter),
                loading: action.payload.loading,
            }
        }
        case types.GET_ARTIST_SONGS: {
            return {
                ...state,
                artistSongs: action.payload.artistSongs
            }
        }
        
        case types.CREATE_ARTIST: {
            return {
                ...state, 
                isArtistCreated: action.payload.isArtistCreated
            }
        }

        case types.SENDING_REQUEST: {
            return {
                ...state,
                loading: action.payload.loading,
            }
        }
        case types.REQUEST_ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: action.payload.loading,
            }
        }

        
        /*
        case types.SENDING_REQUEST: {
            return {
                ...state,
                loading: action.payload.loading,
            }
        }
        case types.REQUEST_ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: action.payload.loading,
            }
        }
        case types.REQUEST_DATA: {
            return {
                ...state,
                list: action.payload.list,
                loading: action.payload.loading,
            }
        }

        case types.REQUEST_POST_DATA: {
            return {
                ...state,
                ok: action.payload.ok,
                loading: action.payload.loading,
            }
        }*/
        default: return state;
    }
}

export default apiState;
