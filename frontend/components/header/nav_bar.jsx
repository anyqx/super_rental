import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        return (
            
            <header className='main-nav-container'>
                <div className='main-nav'>
                <span className='left-nav'>
                    <img id='logo-img' src={window.logoURL} />
                    <span><Link to='/' id='logo-link'>SuperRental</Link></span>
                </span>
                {/* {if this.props.logged_in? ? (
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
                        <button onClick={this.props.logout}>LOG OUT</button>
                        <span>{this.props.currentUser}</span>
                    </div>
                )} */}

                    <span className='right-nav'>
                        <span className='login-link'>
                            <Link to='/login'>LOG IN</Link>
                        </span>
                        <span className='sign-up-link'>
                            <Link to='/signup'>SIGN UP</Link>
                        </span>
                    </span>
                
      
                </div>
            </header>

        )
    }
}
 
export default NavBar;