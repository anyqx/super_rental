import React, { Component } from 'react';

class CartForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {price: '', terms: ''}
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleTerms = this.handleTerms.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {addCartItem, propertyId, userId} = this.props;
        const {price, terms} = this.state;
        const cartitem = { property_id: propertyId, user_id: userId, price: price, terms: terms };
        addCartItem(cartitem);
    }

    handlePrice(e) {
        this.setState({ price: e.target.value });
    }

    handleTerms(e) {
        this.setState({ terms: e.target.value });
    }

    render() {
        return (
            <div className='cart-container'>
                <h2>Cart feature</h2>
                <form className='cart-create-form'onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.price} onChange={this.handlePrice} placeholder='Your magic number...'/>
                    <textarea type="text" value={this.state.terms} onChange={this.handleTerms} placeholder='terms: downpayment. mortgage amount, etc' />
                <button className='submit-button'>Make An Offer</button>
                </form>
            </div>
        )
    }
}

export default CartForm;