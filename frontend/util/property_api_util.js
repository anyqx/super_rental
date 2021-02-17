import { $CombinedState } from "redux"

export const fetchProperties = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/properties'
    })
}

export const fetchProperty = id => {
    return $.ajax({
        method: 'GET',
        url: `api/properties/${id}`
    })
}