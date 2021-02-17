//React
import React from "react";
import ReactDOM from "react-dom";
//Components
import Root from './components/root';
import configureStore from './store/store'
import {logout} from './actions/session_actions'
import { fetchProperty } from "./actions/property_action";



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchProperty = fetchProperty;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});



// test1:
// import {login, signup, logout} from './actions/session_actions'
// window.login = login;
// window.signup = signup;
// window.logout = logout;


//test2 :
// import configureStore from './store/store';
// const store = configureStore();
// // // we don't put the store directly on the window because
// // // it can be confusing when debugging, sometimes giving you access to state
// // // when you shouldn't
// window.getState = store.getState;
// window.dispatch = store.dispatch;

//test 3: test AJAX calls for properties
// window.store = store;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
// window.fetchProperty = fetchProperty;