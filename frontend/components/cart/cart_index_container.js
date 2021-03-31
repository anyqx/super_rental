import CartIndex from "./cart_index";
import { fetchCartItems, deleteCartItem, updateCartItem } from '../../actions/cartitem_actions';
import { itemsArray } from '../../reducers/selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        items: itemsArray(state.entities)
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