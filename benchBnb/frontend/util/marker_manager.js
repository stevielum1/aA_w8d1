class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(benches) {
    const keys = Object.keys(this.markers);
    benches.forEach(bench => {
      if (!keys.includes(bench.id)) this.createMarkerFromBench(bench);
    });
  }

  createMarkerFromBench(bench) {
    const latLng = { lat: bench.lat, lng: bench.lng };
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: bench.description
    });
    this.markers[bench.id] = marker;
  }

  removeMarker(marker) {

  }

}
export default MarkerManager;
