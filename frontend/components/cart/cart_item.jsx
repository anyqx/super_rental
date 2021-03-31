import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // price: this.props.item.price,
            // terms: this.props.item.terms
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
        const cartitem = {property_id: item.property_id, user_id: item.user_id, price: this.state.price, terms: this.state.terms}
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
                    <Link to={`/properties/${item.property_id}`} onClick={() => this.handleClick}>
                        <img src={item.photoUrl} alt="" />
                    </Link>

                </div>
                <div className="item title">
                    <span>{item.title}</span>
                    <div>
                        <Link to={`/properties/${item.property_id}`} onClick={() => this.handleClick}>
                            <p>{item.title}</p>
                        </Link>
                        
                        <text 
                            type="text" 
                            value={this.state.price} 
                            placeholder='your bid price'
                            onClick={this.handleClick}
                            onChange={this.handleChange} />

                        <textarea
                            type="text" 
                            value={this.state.terms}
                            placeholder='input your terms'
                            onClick={this.handleClick}
                            onChange={this.handleChange} />
                    </div>
                    <button onClick={this.removeItem} >Remove</button>
                </div>

            </li>
        </>
        )
    }
}



export default withRouter(CartItem);