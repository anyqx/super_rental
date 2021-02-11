import { connect } from 'react-redux'
import Greeting from '../components/greeting'
import { logout } from '../../actions/session_actions'

const mapStateToProps = ({session, entities: { users }}) => ({
    currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: ()=> dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(greeting);