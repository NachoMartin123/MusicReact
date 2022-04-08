import * as types from "./actionTypes";
//import axios from "axios";
import ArtistDataService from "../../services/artist.service";

import TiestoImg from '../../assets/artistPictures/tiesto.jpg';

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
            { nombre: "The Chainsmokers"},
            { nombre: "artist6"},
        ],
    },
});

export const get_artist_songs = (artistName) => ({
    type: types.GET_ARTIST_SONGS,
    payload: {
        artistSongs: [
            {title: "Levels",artist: "Avicii",album: "Levels",duration: "3:19"},
            {title: "Hey brother",artist: "Avicii",album: "True",duration: "3:23"},
            {title: "Wake me up",artist: "Avicii",album: "True",duration: "3:23"},
            {title: "All you need is love",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Dancing in my head",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "Lovers on the sun",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "You Be Love (ft Billy Raffoul)",artist: "Avicii",album: "AVICI (01)",duration: "3:23"},
            {title: "Without you ft Sandro Cavazza",artist: "AVICI (01)",album: "Album1",duration: "3:23"},
            {title: "Our love",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Addicted to you",artist: "Avicii",album: "True",duration: "3:23"},
            {title: "I could be the one",artist: "Avicii",album: "Album1",duration: "3:23"},
            {title: "Sunset Jesus",artist: "Avicii",album: "Stories",duration: "3:23"},
            {title: "The Nights",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Fade Into Darkness",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "You make me",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Broken Arrows",artist: "Avicii",album: "Stories",duration: "3:23"},
            {title: "For A Better Day",artist: "Avicii",album: "Stories",duration: "3:23"},
            {title: "Seek Bromance",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Silhouettes",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "X You",artist: "Avicii",album: "X You",duration: "3:23"},
            {title: "Tough Love",artist: "Avicii",album: "TIM",duration: "3:23"},
            {title: "Pure grinding",artist: "Avicii",album: "Stories",duration: "3:23"},
            {title: "Taste the feeling ft Conrad Sewell",artist: "Avicii",album: "Album2",duration: "3:23"},
            {title: "Bad Reputation",artist: "Avicii",album: "TIM",duration: "3:23"},

            {title: "One More Time",artist: "Daft Punk",album: "Album3",duration: "3:23"},
            {title: "Get Lucky",artist: "Daft Punk",album: "Album3",duration: "3:23"},
            {title: "Around the world",artist: "Daft Punk",album: "Album3",duration: "3:23"},
            {title: "Harder, Better, Faster, Stronger",artist: "Daft Punk",album: "Album4",duration: "3:23"},
            {title: "I Feel It Coming",artist: "Daft Punk",album: "Album4",duration: "3:23"},
            {title: "Da funk",artist: "Daft Punk",album: "Album4",duration: "3:23"},

            {title: "Red lights",artist: "Tiesto",album: "Album5",duration: "3:23"},
            {title: "Wasted",artist: "Tiesto",album: "Album5",duration: "3:23"},
            {title: "Ritual",artist: "Tiesto",album: "Album6",duration: "3:23"},
            {title: "The Business",artist: "Tiesto",album: "Album6",duration: "3:23"},
            {title: "Boom",artist: "Tiesto",album: "Album5",duration: "3:23"},
            {title: "Jackie Chan",artist: "Tiesto",album: "Album6",duration: "3:23"},

            {title: "Together",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "Animals",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "Scare to be lonely",artist: "Martin Garrix",album: "Album8",duration: "3:23"},
            {title: "Summer days",artist: "Martin Garrix",album: "Album8",duration: "3:23"},
            {title: "Home",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "High on life",artist: "Martin Garrix",album: "Album8",duration: "3:23"},
            {title: "No sleep",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "These are the times",artist: "Martin Garrix",album: "Album8",duration: "3:23"},
            {title: "So far away",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "Pizza",artist: "Martin Garrix",album: "Album8",duration: "3:23"},
            {title: "The Only Way Is Up",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "Forbidden voices",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "Dont look down",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
            {title: "In the Name of Love",artist: "Martin Garrix",album: "Album7",duration: "3:23"},
        ].filter(obj => {
            return obj.artist.toLowerCase().replace(/\s/g, '_') === artistName.toLowerCase().replace(/\s/g, '_');
          }),
    },
});

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
