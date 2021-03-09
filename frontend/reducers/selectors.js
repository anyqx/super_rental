export const selectProperty = ({properties}, propertyId) => {
    return properties[propertyId];
}

export const asArray = ({ properties }) => {
    return Object.keys(properties).map(key => properties[key])
}

export const itemsArray = ( {cartItems} ) => {
    return Object.keys(cartItems).map(key => cartItems[key])
}