import { combineReducers } from 'redux';
import cartItemsReducer from './cartitems_reducer';
import propertiesReducer from './properties_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    properties: propertiesReducer,
    items: cartItemsReducer
})

export default entitiesReducer;