import React from 'react';
import CartItem from './cart_item';
import { withRouter } from 'react-router-dom';

class CartIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchCartItems();
    }

    render() {
        const {items} = this.props;
        if (!items) return null;
        return (
            <>
            <div className='cart-index-container'>
                <p id='title'>Browse All Properties in Cart</p>
                <ul className='cart-item-container'>
                    {items.map(item => {
                        return <CartItem item={item} key={item.id} 
                        updateCartItem={this.props.updateCartItem}
                        deleteCartItem={this.props.deleteCartItem}/>
                    })}
                </ul>
            </div>
            </>
        )
    }
}
export default withRouter(CartIndex);