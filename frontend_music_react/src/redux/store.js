import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

var intialState = {};//ste state to local storage

//try to get data from the sessionStorage using our app unique name
//at the first run this will be empty because nothing has been saved to 
//the sessionStorage with the unique name.
try {
    intialState = sessionStorage.getItem("music_react")
        ? JSON.parse(sessionStorage.getItem("music_react"))
        : {};
} catch (error) {
    console.log("getError", error);
}

/**
 * custom middle-ware named saver. Our custom middle-ware get three arguments by default
 * namely store,next,action; store is an object that can be used to get current state,
 * next is a function that is used to pass the action to the next middle-ware
 * @param {*} store
 * @returns
 */
const saver = (store) => (next) => (action) => {
    let stateToSave = store.getState();
    sessionStorage.setItem("music_react", JSON.stringify({ ...stateToSave }));
    return next(action);
};

/* const rootReducer = combineReducers({
    login: LoginReducer,
}); */
export default createStore(rootReducer, intialState, applyMiddleware(thunk, saver));

//export default createStore(rootReducer, applyMiddleware(thunk));
