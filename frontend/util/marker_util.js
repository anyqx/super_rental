class MarkerManager {
  constructor(map) {
    this.map = map
    this.createMarkerFromProperty = this.createMarkerFromProperty.bind(this)
  }

  updateMarkers(properties) {
    const map = this.map

    if (Array.isArray(properties)) {
      for (let i = 0; i < properties.length; i++) {
        this.createMarkerFromProperty(properties[i], map, i)
      }
    } else {
      this.createMarkerFromProperty(properties, map, null)
    }
  }

  createMarkerFromProperty(property, map, num) {
    if (num === null) {
      const marker = new google.maps.Marker({
        map: map,
        title: property.title,
        position: { lat: property.altitude, lng: property.longitude },
      })
    } else {
      const marker = new google.maps.Marker({
        map: map,
        title: property.title,
        position: { lat: property.altitude, lng: property.longitude },
        label: (num + 1).toString(),
      })
    }
  }
}

export default MarkerManager