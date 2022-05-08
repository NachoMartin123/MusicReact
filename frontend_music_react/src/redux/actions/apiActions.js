import * as types from "./actionTypes";
import axios from "axios";
import ArtistDataService from "../../services/artist.service";



export const createArtist = (artistToInsert) => (dispatch) => {
    return ArtistDataService.create(artistToInsert).then((data) => {
        dispatch(request_post_data(artistToInsert));
    });
};

export const request_post_data = (data) => ({
    type: types.CREATE_ARTIST,
    payload: {
        isArtistCreated: true
        //ok: data.data[0].ok,
    },
});

export const sending_request = () => ({
    type: types.SENDING_REQUEST,
    payload: {
        loading: true,
    }
})
export const request_error = error => ({
    type: types.REQUEST_ERROR,
    payload: {
        error: error,
        loading: false,
    }
})


//========================== GET ARTISTS =================================


export const get_artist_names = (firstData) => dispatch => {
    dispatch(sending_request());
    return getArtistsRequest()
        .then(data => {
            dispatch(request_artist_names(data, firstData.artistsFilter));
        })
        .catch( error => {
            dispatch(request_error(error));
        })
}

const getArtistsRequest = () => {
    var a = axios
    .get(
        'http://localhost:5000/artists'
    )
    .then( res  =>  res)
    .catch( error => error);
    return a;
}

export const request_artist_names = (data, artistsFilter) => ({
    type: types.GET_ARTISTS_NAMES,
    payload: {
        artistsFilter: artistsFilter,
        artistsNames : data.data,
        loading: false,
    },
});


//========================== GET SONGS ARTIST DETAIL =================================

export const get_artist_songs = (artistName) => dispatch => {
    dispatch(sending_request());
    return getSongByArtistsRequest(artistName)
        .then(data => {
            dispatch(request_artist_songs(data));
        })
        .catch( error => {
            dispatch(request_error(error));
        })
}

const getSongByArtistsRequest = (artistName) => {
    var artistNameNoBlank = artistName.replace(" ", "_");
    var a = axios
    .get(
        'http://localhost:5000/artist_detail/'+artistNameNoBlank
    )
    .then( res  =>  res)
    .catch( error => error);
    return a;
}

export const request_artist_songs = (data) => ({
    type: types.GET_ARTIST_SONGS,
    payload: {
        artistSongs : data.data,
        loading: false,
    },
});


/* const postArtist = (artistToInsert) => {
    return axios
        .post("http://localhost:4000/artists/create", artistToInsert)
        .then((res) => res)
        .catch((error) => error);
}; */

/*
export const store_all = data => ({
    type: types.STORE_ALL,
    payload: {
        list: data.list,
        loading: data.loading,
    }
})

export const sending_request = () => ({
    type: types.SENDING_REQUEST,
    payload: {
        loading: true,
    }
})
export const request_data = (data) => ({
    type: types.REQUEST_DATA,
    payload: {
        list: data.data,
        loading: false,
    }
})
export const request_error = error => ({
    type: types.REQUEST_ERROR,
    payload: {
        error: error,
        loading: false,
    }
})

const getData = () => {
    return axios
        .get(
            'http://dev.contanimacion.com/api_tablon/api/mensajes'
        )
        .then( res  =>  res)
        .catch( error => error)
}



export const fetchData = () => dispatch => {
    dispatch(sending_request());
    return getData()
        .then(data => {
            dispatch(request_data(data));
        })
        .catch( error => {
            dispatch(request_error(error));
        })
}
*/

/*
POSTS
 */
/*
export const request_post_data = (data) => ({
    type: types.REQUEST_POST_DATA,
    payload: {
        ok: data.data[0].ok,
        loading: false,
    }
})
const postData = (data) => {
    return axios
        .post(
            'http://dev.contanimacion.com/api_tablon/api/mensajes/add',
            data
        )
        .then( res  =>  res)
        .catch( error => error)
}

export const sendNew = (data) => dispatch => {
    dispatch(sending_request());
    return postData(data)
        .then(data => {
            dispatch(request_post_data(data));
        })
        .catch( error => {
            dispatch(request_error(error));
        })
}
*/
