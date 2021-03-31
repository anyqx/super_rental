export const selectProperty = ({properties}, propertyId) => {
    return properties[propertyId];
}

export const propertyArray = ({ properties }) => {
    return Object.keys(properties).map(key => properties[key])
}