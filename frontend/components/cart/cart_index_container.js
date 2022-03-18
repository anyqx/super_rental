import CartIndex from "./cart_index";
import { fetchCartItems, deleteCartItem, updateCartItem } from '../../actions/cartitem_actions';
import { itemsArray } from '../../reducers/selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => { //accessing redux , passing down objects as props
    const items = Object.values(state.entities.items);
    return {
        items: items
    }
}


const mapDispatchToProps = dispatch => { // passing down functions as props
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        deleteCartItem: (id) => dispatch(deleteCartItem(id)),
        updateCartItem: (cartitem) => dispatch(updateCartItem(cartitem))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);