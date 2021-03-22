import { connect } from 'react-redux'
import PropertyShow from './property_show'
import { fetchProperty } from '../../actions/property_action';
import { selectProperty } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
    debugger
    const propertyId = parseInt(match.params.propertyId);
    const property = selectProperty(state.entities, propertyId);
    // const cartitemId = 
    return {
        // userId: state.session.id,
        // currentUser: state.entities.users[session.id],
        propertyId,
        property
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProperty: id => dispatch(fetchProperty(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyShow)
