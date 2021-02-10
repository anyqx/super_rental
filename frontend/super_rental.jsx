//React
import React from "react";
import ReactDOM from "react-dom";
//Components
import Root from './components/root'
import configureStore from './store/store'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    ReactDOM.render(<h1>Welcome to Super Rental</h1>, root);
});



// test1:
// window.login = login;
// window.signup = signup;
// window.logout = logout;


//test2 :
// const store = configureStore();
// // // we don't put the store directly on the window because
// // // it can be confusing when debugging, sometimes giving you access to state
// // // when you shouldn't
// window.getState = store.getState;
// window.dispatch = store.dispatch;