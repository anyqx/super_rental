import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FavoriteCreateContainer from '../favorite/favorite_create_container';


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
           <div className='property-index-display' key={property.id} >
              <Link to={`/properties/${property.id}`} onClick={()=> this.handleClick}>
                <img src={property.photoUrl} alt=""/>
                <FavoriteCreateContainer id='favorite' propertyId={property.id} key={property.id} />
                <p>Price: $ {property.price}</p>
                <p>{property.bedroom} Bed, {property.bathroom} Bath </p>
                <p> SQFT: {property.sqft}</p>
                <p>Current Rent: ${property.rent}</p>
                <p>Cap Rate: {property.cap_rate}%</p>
                <p>
                    {property.address}<br></br>{property.city}, {property.state} &nbsp; {property.zipcode}
                </p>

              </Link>
          </div>
          </>
        )
    }
}

export default withRouter(PropertyIndexItem);