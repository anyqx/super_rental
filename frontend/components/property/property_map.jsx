import React from 'react';
import MarkerManager from '../../util/marker_util';

class PropertyMap extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // let latLng = new google.maps.LatLng(-8.064903, -34.896872);
    let mapLoc;
    if (Array.isArray(this.props.property)) {
      mapLoc = {
                initialCenter:{
                  lat: 36.778259,
                  lng: -119.417931,
                  },
        // center: latLng,
          // lat: +this.props.property[0].altitude,
          // lng: +this.props.property[0].longitude,
          // lat: +37.62668435579264,
          // lng: +-122.07381861400056,
        center: {
          lat: +this.props.property.altitude,
          lng: +this.props.property.longitude,
          // lat: +37.62668435579264,
          // lng: +-122.07381861400056,
        },
        zoom: 15,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      };
    } else {
      mapLoc = {
        initialCenter:{
                      lat: +36.778259,
                      lng: +-119.417931,
                    },
        // center: latLng,
        
        center: {
          lat: +this.props.property.altitude,
          lng: +this.props.property.longitude,
          // lat: +37.62668435579264,
          // lng: +-122.07381861400056,
        },
        zoom: 15,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      };
    }
    // debugger
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    // this.map = new google.maps.Map(this.mapNode, mapLoc)

    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(this.props.property)
  }

  componentDidUpdate() {
    let mapLoc;
    // debugger
    if (Array.isArray(this.props.property)) {
      mapLoc = {
        initialCenter:{
                      lat: +36.778259,
                      lng: +-119.417931,
                    },
        center: {
          lat: +this.props.property[0].altitude,
          lng: +this.props.property[0].longitude,
          // lat: +37.62668435579264,
          // lng: +-122.07381861400056,
        },
        zoom: 15,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    } else {
      mapLoc = {
        initialCenter:{
                      lat: +36.778259,
                      lng: +-119.417931,
                    },
        center: {
          lat: +this.props.property.altitude,
          lng: +this.props.property.longitude,
          // lat: +37.62668435579264,
          // lng: +-122.07381861400056,
        },
        zoom: 15,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    }
    // this.map = new google.maps.Map(this.mapNode, mapLoc);
    // this.map = new google.maps.Map(document.getElementById("map"), mapLoc);
    
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.property);
  }

  mapCallBack(map){
    // debugger
    return this.mapNode = map;
  }
  render() {
    if (!this.props.property) return null;
    // debugger
    // <div id='map'></div>
    {/* <div id='map' style={{ height: '100%' }} ref={(map) => (this.mapNode = map)}></div> */}
    return (
      <>
    <div id='map' style={{ height: '100%' }} ></div>

      </>
    )
  }
}

export default PropertyMap;