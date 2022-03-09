import * as types from "./actionTypes";
//import axios from "axios";
import ArtistDataService from "../../services/artist.service";

export const get_artist_names = (data) => ({
    type: types.GET_ARTISTS_NAMES,
    payload: {
        artistsFilter: data.artistsFilter,
        artistsNames: [
            { nombre: "Avicii"},
            { nombre: "Tiesto"},
            { nombre: "Daft Punk"},
            { nombre: "Martin Garrix"},
            { nombre: "artist1"},
            { nombre: "artist2"},
            { nombre: "artist3"},
            { nombre: "artist4"},
            { nombre: "The Chainsmokersaaaaaaa"},
            { nombre: "artist6"},
        ],
    },
});

export const get_artist_songs = () => ({
    type: types.GET_ARTIST_SONGS,
    payload: {
        artistSongs: [
            {title: "Levels",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "Hey brother",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "Wake me up",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "All you need is love",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Dancing in my head",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "Lovers on the sun",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Without you",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "Our love",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Addicted to you",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "I could be the one",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "Sunset Jesus",artist: "Avicii",album: "Album2",duration: "3:23"},
        ],
    },
});

/* export const api_filter_artists = data => ({
    type: types.API_FILTER_ARTISTS,
    payload: {
        artistsFilter: data.artistsFilter,
    }
}) */

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
