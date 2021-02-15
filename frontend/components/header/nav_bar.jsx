import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }


    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            
            <header className='main-nav-container'>
                <div className='main-nav'>
                <span className='left-nav'>
                    <img id='logo-img' src={window.logoURL} />
                    <span><Link to='/' className='header-link'>SuperRental</Link></span>
                </span>
                { !this.props.logged_in ? (
                    <span className='right-nav'>
                        <span className='login-link'>
                            <Link to='/login'>LOG IN</Link>
                        </span>
                        <span className='sign-up-link'>
                            <Link to='/signup'>SIGN UP</Link>
                        </span>
                    </span>
                ) : (
                    <div className="right-nav">
                        <div onClick={this.handleLogout} className='logout-button'>LOG OUT</div>
                        {/* <span>{this.props.currentUser}</span> */}
                    </div>
                )}

                </div>
            </header>

        )
    }
}
 
export default NavBar;