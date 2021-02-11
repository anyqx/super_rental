import { Link } from 'react-router-dom';
import React from 'react';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to='/login'>LOG IN</Link>
            <Link to='/signup'>SIGN UP</Link>
        </nav>
    )

    //logout, not nav, hover over
    const personalGreeting = () => (
        <nav> 
            <h2>Hello {currentUser.email}</h2>
            <button onClick={logout}>LOG OUT</button>
        </nav>
    )
    
    return currentUser ? personalGreeting() : sessionLinks();
}


export default Greeting;

