import { connect } from 'react-redux'
import PropertyShow from './property_show'
import { fetchProperty } from '../../actions/property_action';
import { selectProperty } from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProperty: id => dispatch(fetchProperty(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyShow)
