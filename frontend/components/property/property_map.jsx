import React from 'react';
import MarkerManager from '../../util/marker_util';

class PropertyMap extends React.Component {
  constructor(props) {
    super(props);
  }

  
  componentDidMount() {
    let mapLoc;
    if (Array.isArray(this.props.property)) {
      mapLoc = {
        center: {
          lat: +this.props.property.altitude,
          lng: +this.props.property.longitude,
        },
        zoom: 10,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      };
    } else {
      mapLoc = {
        
        center: {
          lat: this.props.property.altitude,
          lng: this.props.property.longitude,
        },
        zoom: 10,
        // mapTypeControl: false,
        // scaleControl: false,
        // streetViewControl: false,
        // rotateControl: false,
        // fullscreenControl: true,
      };
    }
    this.map = new google.maps.Map(document.getElementById("map"), mapLoc);
    // this.map = new google.maps.Map(document.getElementById("map"), {
    //   center: { lat: +37.62668435579264, lng: +-122.07381861400056 },
    //   zoom: 12,
    // });
    // this.map = new google.maps.Map(this.mapNode, mapLoc)

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.property);
  }

  componentDidUpdate() {
    let mapLoc;
    if (Array.isArray(this.props.property)) {
      mapLoc = {
        center: {
          lat: +this.props.property[0].altitude,
          lng: +this.props.property[0].longitude,
        },
        zoom: 10,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    } else {
      mapLoc = {
        center: {
          lat: +this.props.property.altitude,
          lng: +this.props.property.longitude,
        },
        zoom: 10,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    }
    
    // this.map = new google.maps.Map(this.mapNode, mapLoc);
    this.map = new google.maps.Map(document.getElementById("map"), mapLoc);
    
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.property);
  }

  render() {
    if (!this.props.property) return null;
    return (
      <>
      <div id='map' style={{height: '100%'}}></div>
      </>
    )
  }
}

export default PropertyMap;