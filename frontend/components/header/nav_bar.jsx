import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='header-nav-bar'>
                <span className='header-nav-bar-left'>
                    <Link to='/' id='logo-link'>SuperRental</Link>
                </span>
                <span className='header-nav-bar-right'>
                    <span className='login-link'>
                        <Link to='/login'>LOG IN</Link>
                    </span>
                    <span className='sign-up-link'>
                        <Link to='/signup'>SIGN UP</Link>
                    </span>
                </span>
            </div>

        )
    }
}
 
export default NavBar;