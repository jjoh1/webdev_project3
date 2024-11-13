let map;


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const pinBackground = new PinElement({
    background: "#ffcfe6",
  });

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.87313493952422, lng: -87.62777109948178 },
    zoom: 10.5,
    mapId: "4504f8b37365c3d0",
  });
  
  const jones = new AdvancedMarkerElement({
    map,
    position: { lat: 41.87313493952422, lng: -87.62777109948178 },
    title: "Jones College Prep",
    content: pinBackground.element,
  });
  
  const loyola = new AdvancedMarkerElement({
    map,
    position: { lat: 41.99854414314861, lng: -87.65706614918372 },
    title: "Loyola University Chicago",
    content: pinBackground.element,
  });
  
  const iit = new AdvancedMarkerElement({
    map,
    position: { lat: 41.85106289143754, lng: -87.6227089523229 },
    title: "Illinois Institute of Technology",
    content: pinBackground.element,
  });
}

initMap();