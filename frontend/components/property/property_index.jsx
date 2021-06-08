import React from 'react';
import PropertyIndexItem from './property_index_item';


class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProperties();
        this.props.fetchFavorites();
    }

    render() {
        const { properties} = this.props;
        if (!properties) return null;
        return ( 
            <>
            <div>
                <h1>Browse All Properties</h1>
                <ul className='properties-index-container'>
                    {properties.map(property => {
                        return (
                            <PropertyIndexItem property={property} key={property.id} />
                        )
                    })}
                </ul>
            </div> 
            </>
        )
    }
}
 
export default PropertyIndex;