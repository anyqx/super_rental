import * as APIUtil from '../util/favorite_api_util';

// export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// export const receiveFavorites = favorites => {
//     return {
//         type: RECEIVE_FAVORITES,
//         favorites
//     }
// }

export const receiveFavorite = favorite => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

export const removeFavorite = id => {
    return {
        type: REMOVE_FAVORITE,
        id
    }
}

// export const fetchFavorites = () => dispatch => {
//     return APIUtil.fetchFavorites()
//         .then( favorites => dispatch(receiveFavorites(favorites)))
// }

export const fetchFavorite = id => dispatch => {
    return APIUtil.fetchFavorite(id)
        .then (favorite => dispatch(receiveFavorite(favorite)));
}

export const deleteFavorite = id => dispatch => {
    return APIUtil.removeFavorite(id)
        .then( () => dispatch(removeFavorite(id)));
};

