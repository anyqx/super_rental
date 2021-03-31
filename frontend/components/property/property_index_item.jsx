import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class PropertyIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        const propertyId = this.props.property.id;
        this.props.history.push(`/properties/${propertyId}`);
    }
    render() {
        const { property } = this.props;
        return (
           <>
           <div key={property.id} >
              <Link to={`/properties/${property.id}`} onClick={()=> this.handleClick}>
                <img src={property.photoUrl} alt=""/>
                <p>$ {property.price}</p>
                <p>{property.bedroom} bd, {property.bathroom} ba | {property.sqft} sqft</p>
                <p>
                    <span>Current Rent${property.rent}</span>
                    <span>Cap Rate {property.cap_rate}%</span>
                </p>
                <p>
                    {property.address}<br></br>{property.city}, {property.state} &nbsp; {property.zipcode}
                </p>
              </Link>
          </div>
          </>
        )
    }
}

                // <ul className='properties-index-container'>
                //     {properties.map(property => (
                //         <div key={property.id} className='property-container'>
                //             <div className='house-pic'>
                //                 <img src={property.photoUrl} onClick={this.handleClick}></img>
                //             </div>
                //             <li>$ {property.price}</li>
                //             <li>{property.bedroom} bd, {property.bathroom} ba | {property.sqft} sqft</li>
                //             <li>Current Rent ${property.rent}</li>
                //             <li>Cap Rate {property.cap_rate}%</li>
                //             <li>{property.address}</li>
                //             <li>{property.city}, {property.state} &nbsp; {property.zipcode}</li>
                //         </div>
                //     ))}
                // </ul>

export default withRouter(PropertyIndexItem);