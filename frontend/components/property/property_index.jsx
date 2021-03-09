import React from 'react';
import propertiesReducer from '../../reducers/properties_reducer';
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchProperties();
    }

    render() {
        if (!this.props.properties[0])  return null;
        const { properties } = this.props;
        return (
            <>
            <div>
                <h1>Browse All Properties</h1>
                <ul className='properties-index-container'>
                    {properties.map(property => (
                        <div key={property.id} className='property-container'>
                            <div className='house-pic'>
                                <img src={property.photoUrl}></img>
                            </div>
                            <li>$ {property.price}</li>
                            <li>{property.bedroom} bd, {property.bathroom} ba | {property.sqft} sqft</li>
                            <li>Current Rent ${property.rent}</li>
                            <li>Cap Rate {property.cap_rate}%</li>
                            <li>{property.address}</li>
                            <li>{property.city}, {property.state} &nbsp; {property.zipcode}</li>
                        </div>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}
 
export default PropertyIndex;