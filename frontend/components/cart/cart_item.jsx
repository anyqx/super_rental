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
            <li key={item.id}>
                <div className="item photo">
                    <p>{item.address}</p>
                    <img src={item.photoUrl} alt="" />
            

                </div>
                <div className="item title">
                    <div>
                        <p>Edit your offer</p>
    
                        <p>current offer price: {item.offer_price}</p>
                        <p>current terms: {item.terms}</p>
                        <br/><br/>
                        <div>
                            <label>Update offer price</label>
                            <input 
                                type="text" 
                                value={this.state.offer_price} 
                                // placeholder={item.offer_price}
                                placeholder='input your new number'
                                onChange={this.update('offer_price')} />
                            <label>Update offer terms</label>
                            <textarea
                                type="text" 
                                value={this.state.terms}
                                placeholder='type your terms here, such as downpayment and financing options'
                                onChange={this.update('terms')} />
                        </div>
                        <button onClick={this.handleSubmit}>Update Offer</button>
                    </div>
                    <div>
                        <p>Delete Form</p>
                        <button onClick={this.removeItem} >delete this property</button>
                    </div>
                </div>

            </li>
            </div>
        </>
        )
    }

}


export default withRouter(CartItem);