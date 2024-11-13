let map;


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.87313493952422, lng: -87.62777109948178 },
    zoom: 10.5,
    mapId: "4504f8b37365c3d0",
  });
  
  const jones = new AdvancedMarkerElement({
    map,
    position: { lat: 41.87313493952422, lng: -87.62777109948178 },
    title: "Jones College Prep",
  });
}

initMap();