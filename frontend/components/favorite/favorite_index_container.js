import { connect } from 'react-redux'
import PropertyShow from './property_show'
import { fetchFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = (state, {match}) => {
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
        fetchFavorite: () => dispatch(fetchFavorite()),
        deleteFavorite: id => dispatch(deleteFavorite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyShow)
