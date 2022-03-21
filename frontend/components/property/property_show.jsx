import React from 'react';

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

    addComma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    render() {
        const {property} = this.props;
        if (!property) return null;
        return (
            <>
            <div className='property-show-container'>
                    <div className='property-show-address'>
                        <span id='address1'>{property.address}</span> <br />
                        <span id='address2'>{property.city}, {property.state} &nbsp; {property.zipcode} <br /></span>
                    </div>
                <div className='property-img-cart'>
                    <img src={property.photoUrl} alt=""/>   
        
                    <div className='property-summary'>
                        <div><FavoriteCreateContainer propertyId={property.id}/></div>
                        <p id='summary'>Summary </p>
                        <p id='price'><span className='columnTitle'>Asking Price: $ </span>{this.addComma(property.price)}</p>
                        <p>{property.bedroom} bd, {property.bathroom} ba | {this.addComma(property.sqft)} sqft</p>
                        <p><span className='columnTitle'>Current Rent: $</span>{this.addComma(property.rent)}</p>
                        <p><span className='columnTitle'>Cap Rate: </span>{property.cap_rate}%</p>
                        <p><span className='columnTitle'>Gross Yield: </span>{property.gross_yield}%</p>
                        <p><span className='columnTitle'>Annualized Return: </span>{property.annualized_return} %</p>
                        <p><span className='columnTitle'>10 Year Total Return: $</span>{this.addComma(property.total_return)} </p>
                    </div>
                    
                    <div className='property-show-create-cart'>
                        <CartCreateContainer propertyId={property.id}/>
                    </div>
                </div>
                {/* pass a prop and add else/if in the favorite cerate component */}
                
                
                <div className='map'>

                    {/* Google Map */}
                    <a
                      className="location-link"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${property.altitude},${property.longitude}`}
                      target="_blank"
                    ></a>
                
                    <div className='google-map'>
                        <PropertyMap property={property} type="show" zoom="false" />
                    </div>
                </div>
            </div>
                    
            </>
        )
    }
}
 
export default PropertyShow;