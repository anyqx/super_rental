import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class CartCreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {offer_price: '', terms: ''}
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOffer = this.handleOffer.bind(this);
        this.handleTerms = this.handleTerms.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {addCartItem, propertyId, userId} = this.props;
        const {offer_price, terms} = this.state;
        const cartitem = { property_id: propertyId, user_id: userId, offer_price: offer_price, terms: terms };
        addCartItem(cartitem)
            .then(() => this.props.history.push('/cart'));
    }

    handleOffer(e) {
        this.setState({ offer_price: e.target.value });
    }

    handleTerms(e) {
        this.setState({ terms: e.target.value });
    }

    render() {
        return (
            <div className='cart-container'>
                <form className='cart-create-form' onSubmit={this.handleSubmit}>
                    <input id='offer' type="text" value={this.state.offer_price} onChange={this.handleOffer} placeholder='Your magic number...'/>
                    <textarea id='terms'type="text" value={this.state.terms} onChange={this.handleTerms} placeholder='terms: downpayment. mortgage amount, etc' />
                    <button className='submit-button'>Make An Offer</button>
                </form>
            </div>
        )
    }
}

export default withRouter(CartCreateForm);