import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartitems: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleChange(field){
        this.setState({[field]: e.target.value}, ()=>{
            this.handleUpdate();
        });
    }

    handleUpdate(){
        const { item } = this.props;
        const cartitem = {property_id: item.property_id, user_id: item.user_id, price: this.state.price, terms: this.state.terms};
        this.props.updateCartItem(item.id, cartitem);
    }

    handleClick(e) {
        const propertyId = this.props.item.property_id;
        this.props.history.push(`/properties/${propertyId}`);
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
                
                        <p>current offer price: {item.price}</p>
                        <p>current terms: {item.terms}</p>
                        <textarea 
                            type="text" 
                            value={this.state.price} 
                            placeholder='your bid price'
                            // onClick={this.handleClick}
                            onChange={this.handleUpdate} />

                        <textarea
                            type="text" 
                            value={this.state.terms}
                            placeholder='input your terms'
                            // onClick={this.handleClick}
                            onChange={this.handleUpdate} />

                        <button onClick={this.handleClick}>Submit Change</button>
                    </div>
                    <h2>Delete Form</h2>
                    <button onClick={this.removeItem} >delete this property</button>
                </div>

            </li>
        </>
        )
    }
}



export default withRouter(CartItem);