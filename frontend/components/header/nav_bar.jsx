import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='header-nav-bar'>
                <span id='header-nav-bar-left'>
                    <Link to='/' id='logo-link'>SuperRental</Link>


                </span>
                <span id='header-nav-bar-right'>
                    <span id='login-link'>
                        <Link to='/login'>LOG IN</Link>
                    </span>
                    <span id='sign-up-link'>
                        <Link to='/signup'>SIGN UP</Link>
                    </span>
                </span>
            </div>

        )
    }
}
 
export default NavBar;