import FavoriteCreate from "./favorite_create";
import { addFavorite } from '../../actions/favorite_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let isFavorited = false;
    if (Object.keys(state.entities.favorites).includes(ownProps.propertyId.toString())) {
        isFavorited = true;
    }
    return {
        userId: state.session.id,
        isFavorited: isFavorited
    }
}


const mapDispatchToProps = dispatch => {
    return {
        // fetchFavorites: () => dispatch(fetchFavorites()),
        addFavorite: (favorite) => dispatch(addFavorite(favorite)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCreate);