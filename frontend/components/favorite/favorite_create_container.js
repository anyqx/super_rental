import FavoriteCreate from "./favorite_create";
import { addFavorite, fetchFavorites } from '../../actions/favorite_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        userId: state.session.id
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchFavorites: () => dispatch(fetchFavorites()),
        addFavorite: (favorite) => dispatch(addFavorite(favorite))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCreate);