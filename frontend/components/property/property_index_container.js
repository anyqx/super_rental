import PropertyIndex from './property_index';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions/property_action';
import { propertyArray } from '../../reducers/selectors'
import { fetchFavorites } from '../../actions/favorite_actions';

const mapStateToProps = (state) => {
    return {
        properties: propertyArray(state.entities),
        favorites: Object.values(state.entities.favorites),
        userId: state.session.id
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties()),
    fetchFavorites: () => dispatch(fetchFavorites())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(PropertyIndex)
