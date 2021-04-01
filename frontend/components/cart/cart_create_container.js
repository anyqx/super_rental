import CartCreateForm from "./cart_create";
import { addCartItem } from '../../actions/cartitem_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        userId: state.session.id
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addCartItem: (cartitem) => dispatch(addCartItem(cartitem))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartCreateForm);