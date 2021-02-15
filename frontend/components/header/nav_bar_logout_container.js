import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar'

const mapStateToProps = (state) => {
    return {
        currentUser: state.users.current_user,
        logged_in: Boolean(state.users.current_user ? state.users.current_user.id != null : false)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);