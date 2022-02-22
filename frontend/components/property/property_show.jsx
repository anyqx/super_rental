import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CartCreateContainer from '../cart/cart_create_container';
import PropertyMap from './property_map'
import FavoriteCreateContainer from '../favorite/favorite_create_container';

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
                <p id='address1'>{property.address}</p>
                <p id='address2'>{property.city}, {property.state} &nbsp; {property.zipcode}</p>
                <p><FavoriteCreateContainer propertyId={property.id}/></p>
                {/* pass a prop and add else/if in the favorite cerate component */}
                
                
                <div className='img-cart'>
                    <img src={property.photoUrl} alt=""/>
                    <CartCreateContainer propertyId={property.id}/>
                </div>
                
                <div className='map-and-summary'>
                    <div className='property-summary'>
                        <p id='summary'>Summary </p>
                        <p id='intro'>{property.bedroom} bd, {property.bathroom} ba | {property.sqft} sqft</p>
                        <p><span className='columnTitle'>Price: $ </span>{property.price}</p>
                        <p><span className='columnTitle'>Current Rent: $</span>{property.rent}</p>
                        <p><span className='columnTitle'>Cap Rate: </span>{property.cap_rate}%</p>
                        <p><span className='columnTitle'>Gross Yield: </span>{property.gross_yield}%</p>
                        <p><span className='columnTitle'>Annualized Return: </span>{property.annualized_return} %</p>
                        <p><span className='columnTitle'>10 year total return: $</span>{property.total_return} </p>
                    </div>
                    <div className='google-map'>
                        <PropertyMap property={property} type="show" zoom="false" />
                    </div>
                </div>
                {/* get direction    */}
                <a
                      className="location-link"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${property.altitude},${property.longitude}`}
                      target="_blank"
                    ></a>
            </div>
            </>
        )
    }
}
 
export default PropertyShow;