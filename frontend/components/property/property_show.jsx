import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class PropertyShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { };
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const propertyId = this.props.propertyId;
        this.props.fetchProperties(propertyId);
    }

    // handleClick() {
    //     e.preventDefault();
    //     const { currentUser, addCartItem, propertyId, userId } = this.props;
    //     currentUser ? addCartItem({propertyId: propertyId, user_id: userId}) :  '/login'
    // }
    render() {
        const {property} = this.props;
        if (!property) return null;
        return (
            <>
            <div className='property-show-container'>

            <h2>Property</h2>
            <img src={property.photoUrl} alt=""/>
                <li>$ {property.price}</li>
                <li>{property.bedroom} bd, {property.bathroom} ba | {property.sqft} sqft</li>
                <li>Current Rent ${property.rent}</li>
                <li>Cap Rate {property.cap_rate}%</li>
                <li>{property.address}</li>
                <li>{property.city}, {property.state} &nbsp; {property.zipcode}</li>
            </div>
            </>
        )
    }
}
 
export default PropertyShow;