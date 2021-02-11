//React
import React from "react";
import ReactDOM from "react-dom";
//Components
import Root from './components/root';
import configureStore from './store/store'




document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    //testing start
    window.getState =  store.getState;
    window.dispatch = store.dispatch;
    //testing end
    
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