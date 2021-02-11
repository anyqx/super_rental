import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../util/session';
import Signup from './signup';


// mapDispatchToProps
const mDTP = dispatch => ({
    createNewUser: user => dispatch(signup(user))
})

export default connect(null, mDTP)(Signup);