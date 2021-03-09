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
        const { properties } = this.props
        return (
            <>
            <div>
                <h1>Browse All Properties</h1>
                <ul>
                    {properties.map(property => (
                        <div key={property.id}>
                            <li>{property.sqft}</li>
                            <li>{property.address}</li>
                        </div>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}
 
export default PropertyIndex;