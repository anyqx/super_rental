import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartitems: [],
            id: this.props.item.id,
            offer_price: '',
            terms:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateCartItem(this.state);
        // this.props.history.push(`/cart`);
        this.setState({
            offer_price: '',
            terms:''
        })
    }

    removeItem(e){
        this.props.deleteCartItem(this.props.item.id);
    }
    render() {
        const { item } = this.props;
        return (
            <>
            <div className="items-container">
                <ul key={item.id}>
                    <div className='items-description'>
                        <img id='property-img' src={item.photoUrl} alt=""/>
                        <p>{item.address} <br/>
                            {item.city}, {item.state} &nbsp; {item.zipcode}
                        </p>
                        <p>$ {item.price}</p>
                        <p>{item.bedroom} bd, {item.bathroom} ba | {item.sqft} sqft</p>
                        {/* <p>Current Rent: ${item.rent}</p>
                        <p>Cap Rate: {item.cap_rate}%</p>
                        <p>Gross Yield: {item.gross_yield}%</p>
                        <p>Annualized Return: {item.annualized_return} %</p>
                        <p>10 yr total return: ${item.total_return} </p> */}
                        <p>current offer price: <br/>{item.offer_price}</p>
                        <p>current offer terms: <br/> {item.terms}</p>
                        <br/><br/>
                        <button className='submit-button' onClick={this.removeItem} >delete</button>
                    </div>
                    <div className='cart-update-form'>
                        Update My Offer
                        {/* <label>Update My Offer</label> */}
                            <br/>
                            <input 
                                type="text" 
                                value={this.state.offer_price} 
                                placeholder='input your new number'
                                onChange={this.update('offer_price')} />
                            <br/>
                        {/* <label>Update offer terms</label> */}
                            <br/>
                        <textarea
                                type="text" 
                                value={this.state.terms}
                                placeholder='type your terms here, such as downpayment and financing options'
                                onChange={this.update('terms')} />
                        <button className='submit-button' onClick={this.handleSubmit}>Update Offer</button>
                    </div>
                </ul>
            </div>
        </>
        )
    }

}


export default withRouter(CartItem);