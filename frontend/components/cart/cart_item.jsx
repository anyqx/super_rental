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
        this.setState({
            offer_price: '',
            terms:''
        })
    }

    removeItem(e){
        this.props.deleteCartItem(this.props.item.id);
    }

    addComma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { item } = this.props;
        return (
            <>
            <div className="items-container">
                <ul key={item.id}>
                    <div className='items-description'>
                        <Link to={`/properties/${item.property_id}`}>
                            <img id='property-img' src={item.photoUrl} alt=""/>
                        </Link>
                        <p> <span id='address1'>{item.address} <br/></span>
                            <span id='address2'>{item.city}, {item.state} &nbsp; {item.zipcode}
                            <br />{item.bedroom} bd, {item.bathroom} ba | {this.addComma(item.sqft)} sqft</span>
                        </p>
                        <p>
                            <span id='column'>Asking Price</span> <br />
                            <span>$ {this.addComma(item.price)}</span> <br />
                        </p>
                        {/* <p>Current Rent: ${item.rent}</p>
                        <p>Cap Rate: {item.cap_rate}%</p>
                        <p>Gross Yield: {item.gross_yield}%</p>
                        <p>Annualized Return: {item.annualized_return} %</p>
                        <p>10 yr total return: ${item.total_return} </p> */}
                        <p>
                            <span id='column'>My offer Price <br/></span>
                            $ {this.addComma(item.offer_price)}
                        </p>
                        <p>
                            <span id='column'>Terms </span><br />{item.terms}
                        </p>
                        <button id='cancel-button' onClick={this.removeItem} >cancel <br /> bid</button>
                        
                    </div>
                    <div className='cart-update-form'>
                        <input 
                            type="text" 
                            value={this.state.offer_price} 
                            placeholder='input your new number'
                            onChange={this.update('offer_price')} />
                        <textarea
                            type="text" 
                            value={this.state.terms}
                            placeholder='type your terms here, such as downpayment and financing options'
                            onChange={this.update('terms')} />
                        <button id='update-button' onClick={this.handleSubmit}>Update Offer</button>
    
                    </div>
                </ul>
            </div>
        </>
        )
    }

}


export default withRouter(CartItem);