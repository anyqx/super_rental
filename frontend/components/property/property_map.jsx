import React from 'react';
import MarkerManager from '../../util/marker_util'

class PropertyMap extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let mapLoc
    if (Array.isArray(this.props.properties)) {
      mapLoc = {
        center: {
          lat: +this.props.properties[0].altitude,
          lng: +this.props.properties[0].longitude,
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
          lat: +this.props.properties.altitude,
          lng: +this.props.properties.longitude,
        },
        zoom: 10,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    }

    this.map = new google.maps.Map(this.mapNode, mapLoc)

    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(this.props.properties)
  }

  componentDidUpdate() {
    let mapLoc
    if (Array.isArray(this.props.properties)) {
      mapLoc = {
        center: {
          lat: +this.props.properties[0].altitude,
          lng: +this.props.properties[0].longitude,
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
          lat: +this.props.properties.altitude,
          lng: +this.props.properties.longitude,
        },
        zoom: 10,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    }

    this.map = new google.maps.Map(this.mapNode, mapLoc)
    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(this.props.properties)
  }

  render() {
    if (!this.props.properties) return null
    return (
      <div style={{ height: '100%' }} ref={(map) => (this.mapNode = map)}></div>
    )
  }
}

export default PropertyMap;