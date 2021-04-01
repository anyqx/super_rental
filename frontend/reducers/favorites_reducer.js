import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FAVORITES:
            return Object.assign({}, action.favorites);
        case RECEIVE_FAVORITE:
            return Object.assign({}, action.favorites);
        case REMOVE_FAVORITE:
            const newState = Object.assign({}, state);
            delete newState[action.favoriteId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}
export default favoritesReducer;