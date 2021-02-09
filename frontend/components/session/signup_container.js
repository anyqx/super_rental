import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup'


// mapDispatchToProps
const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
})

export default connect(null, mDTP)(Signup);