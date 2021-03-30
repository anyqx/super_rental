import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CartCreateContainer from '../cart/cart_create_container';
import PropertyMap from './property_map'

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
                <div className="google-maps">
                    <PropertyMap property={property} type="show" zoom="false" />
                </div>
            <div className='property-show-container'>
                {/* <h2>Property</h2> */}
                <p id='address1'>
                    {property.address}
                </p>
                <p id='address2'>
                    {property.city}, {property.state} &nbsp; {property.zipcode}
                </p>
                <img src={property.photoUrl} alt=""/>
                <p>$ {property.price}</p>
                <p>{property.bedroom} bd, {property.bathroom} ba | {property.sqft} sqft</p>
                <p>Current Rent${property.rent}</p>
                <p>Cap Rate {property.cap_rate}%</p>
                <p>Gross Yield: {property.gross_yield}%</p>
                <p>Annualized Return: {property.annualized_return} %</p>
                <p>10 year total return: ${property.total_return} </p>
                {/* get direction  */}
                <a
                      className="location-link"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${property.lat},${property.lng}`}
                      target="_blank"
                    ></a>
            </div>
                <CartCreateContainer propertyId={property.id}/>
                <div>
            </div>
            </>
        )
    }
}
 
export default PropertyShow;