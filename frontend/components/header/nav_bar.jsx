import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='header-nav-bar'>
                <span class='header-nav-bar-left'>
                    <Link to='/' id='logo-link'>SuperRental</Link>
                </span>
                <span class='header-nav-bar-right'>
                    <span class='login-link'>
                        <Link to='/login'>LOG IN</Link>
                    </span>
                    <span class='sign-up-link'>
                        <Link to='/signup'>SIGN UP</Link>
                    </span>
                </span>
            </div>

        )
    }
}
 
export default NavBar;