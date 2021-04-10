import React, { Component } from 'react';
import PropertyMap from './property_map';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        // this.property = {
        //     property: {
        //         altitude: 36.778259,
        //         longtitude: -119.417931
        //     }
        // };
        
    }
    
    
    initMap() {
        let map;
        map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
    render() {
        {/* <div className="google-maps">
            <PropertyMap property={this.property} type="show" zoom="false" />
        </div> */}
        return (
            <div>
                <h1>MAPPAGE</h1>
                <div id="map"></div>
            </div>
        )
    }
}

export default MapPage;