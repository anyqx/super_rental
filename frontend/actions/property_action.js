import * as APIUtil from '../util/property_api_util';

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';

export const receiveProperties = properties => {
    return {
        type: RECEIVE_PROPERTIES,
        properties
    }
}

export const receiveProperty = property => {
    return {
        type: RECEIVE_PROPERTY,
        property
    }
}

export const fetchProperties = () => dispatch => {
    return APIUtil.fetchProperties()
        .then( properties => {console.log('fetch properties', properties); dispatch(receiveProperties(properties))})
}
export const fetchProperty = id => dispatch => {
    return APIUtil.fetchProperty(id)
        .then (property => dispatch(receiveProperty(property)))
}