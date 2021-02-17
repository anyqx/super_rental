import { combineReducers } from 'redux';
import propertiesReducer from './properties_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    properties: propertiesReducer
})

export default entitiesReducer;