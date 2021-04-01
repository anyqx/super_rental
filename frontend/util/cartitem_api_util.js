export const fetchCartitems = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/cartitems`
    })
}

export const fetchCartitem = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/cartitems/${id}`
    })
}

export const createCartitem = cartitem => (
    $.ajax({
        method: 'POST',
        url: `/api/cartitems`,
        data: { cartitem }
    })
);

export const removeCartitem = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cartitems/${id}`
    })
}

export const updateCartitem = (cartitem) => {
    console.log(cartitem)
    return $.ajax({
        method: 'PATCH',
        url: `/api/cartitems/${cartitem.id}`,
        data: { cartitem }
    })
}