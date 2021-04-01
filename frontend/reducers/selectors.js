export const selectProperty = ({properties}, propertyId) => {
    console.log(properties);
    return properties[propertyId];
}

export const propertyArray = ({ properties }) => {
    return Object.keys(properties).map(key => properties[key])
}