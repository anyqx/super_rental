import React, { Component } from 'react';
import PropertyMap from './property_map';

export class MapPage extends React.Component {
    constructor(props) {
        super(props);
        property = {altitude: 36.778259,
                  longtitude: -119.417931}
    }
    
    render() {
        return (
            <div>
                <h1>MAPPAGE</h1>
                <div className="google-maps">
                    <PropertyMap property={property} type="show" zoom="false" />
                </div>
            </div>
        )
    }
}

export default MapPage;