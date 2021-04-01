import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartitems: []
        };

        // this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
    }
    // handleChange(field){
    //     this.setState({[field]: e.target.value}, ()=>{
    //         this.Update();
    //     });
    // }

    // update(field){
        
    //     const { item } = this.props;
    //     const cartitem = {property_id: item.property_id, user_id: item.user_id, price: this.state.price, terms: this.state.terms};
    //     debugger
    //     this.props.updateCartItem(item.id, cartitem);
    //     debugger
    // }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    // handleClick(e) {
    //     const propertyId = this.props.item.property_id;
    //     // this.props.history.push(`/properties/${propertyId}`);
    //     this.props.history.push(`/cartitems/`)
    //     debugger
    // }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.updateCartItem(this.state);
        debugger
        // this.props.history.push(`/cart/${this.props.items.id}`)

    }
    removeItem(e){
        this.props.deleteCartItem(this.props.item.id);
    }
    render() {
        const { item } = this.props;
        return (
            <>
            <li key={item.id} className="items-container">
                <div className="item photo">
                    <h1>{item.address}</h1>
                    <img src={item.photoUrl} alt="" />
            

                </div>
                <div className="item title">
                    <div>
                        <h2>Edit your offer</h2>
                
                        <p>current offer price: {item.offer_price}</p>
                        <p>current terms: {item.terms}</p>
                        <br/><br/>
                        <div>
                            <label>change offer price</label>
                            <input 
                                type="text" 
                                value={this.state.offer_price} 
                                placeholder='your bid price'
                                // onClick={this.handleSubmit}
                                onChange={this.update('offer_price')} />
                            <label>change offer terms</label>
                            <textarea
                                type="text" 
                                value={this.state.terms}
                                placeholder='input your terms'
                                // onClick={this.handleSubmit}
                                onChange={this.update('terms')} />
                        </div>
                        <button onClick={this.handleSubmit}>Save Offer</button>
                    </div>
                    <div>
                        <h2>Delete Form</h2>
                        <button onClick={this.removeItem} >delete this property</button>
                    </div>
                </div>

            </li>
        </>
        )
    }
}



export default withRouter(CartItem);