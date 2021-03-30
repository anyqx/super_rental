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
                        <span className='login-box'>
                            <Link to='/login' className='button'>LOG IN</Link>
                        </span>
                        <span className='signup-box'>
                            <Link to='/signup' className='button'>SIGN UP</Link>
                        </span>
                    </span>
                ) : (
                    <div className="right-nav">
                        <span>
                            <Link to='/cart' className='button'>Cart</Link>
                        </span>
                        <span className='logout-box'>
                            <div onClick={this.handleLogout} className='button'>LOG OUT</div>
                            {/* <span>{this.props.currentUser}</span> */}
                        </span>
                    </div>
                )}

                </div>
            </header>

        )
    }
}
 
export default NavBar;