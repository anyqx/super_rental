import CartIndex from "./cart_index";
import { fetchCartItems, deleteCartItem, updateCartItem } from '../../actions/cartitem_actions';
import { itemsArray } from '../../reducers/selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const items = Object.values(state.entities.items)
    debugger
    return {
        items: items
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        deleteCartItem: (id) => dispatch(deleteCartItem(id)),
        updateCartItem: (id, cartitem, price, terms) => dispatch(updateCartItem(id, cartitem, price, terms))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);