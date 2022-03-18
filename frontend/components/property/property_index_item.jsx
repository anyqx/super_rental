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

    componentDidUpdate(prevProps) {
        
    }

    addComma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { property } = this.props;
        // (1000000.to_s.reverse.scan(/\d{1,3}/).join(",").reverse)
        //num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return (
           <>
           <div className='property-index-display' key={property.id} >
              <Link to={`/properties/${property.id}`} onClick={()=> this.handleClick}>
                <FavoriteCreateContainer id='favorite' propertyId={property.id} key={property.id} />
                <img src={property.photoUrl} alt=""/>
                <p><span className='columnTitle'>Price: $</span> {this.addComma(property.price)}</p>
                <p><span className='columnTitle'>SQFT: </span>{this.addComma(property.sqft)}</p>
                <p><span className='columnTitle'>Current Rent: $</span>{this.addComma(property.rent)}</p>
                <p><span className='columnTitle'>Cap Rate:</span> {property.cap_rate}%</p>
                <p>{property.bedroom} Beds, {property.bathroom} Baths </p>
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