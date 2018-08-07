export const fetchBenches = filters => {
  let lowerLat, upperLat, lowerLng, upperLng;
  if (filters !== undefined) {
    lowerLat = filters.bounds.southWest.lat;
    upperLat = filters.bounds.northEast.lat;
    lowerLng = filters.bounds.southWest.lng;
    upperLng = filters.bounds.northEast.lng;
  }

  return $.ajax({
    method: 'GET',
    url: "/api/benches",
    success: benches => {
      if (filters === undefined) return benches;
      return benches.filter(bench => {
        (lowerLat < bench.lat && bench.lat < upperLat && lowerLng < bench.lng && bench.lng < upperLng)
      });
    }
  });
};
