var  OSM_URL  =  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  
var  OSM_ATTRIB  =  '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';  
var  osmLayer  =  L.tileLayer(OSM_URL,  {attribution:  OSM_ATTRIB});  

var  WAQI_URL    =  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";  
var  WAQI_ATTR  =  'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
var  waqiLayer  =  L.tileLayer(WAQI_URL,  {attribution:  WAQI_ATTR});  

var  map  =  L.map('map').setView([51.505,  -0.09],  11);  
map.addLayer(osmLayer).addLayer(waqiLayer);  


// var cases = [];
// var deaths = [];

// for (var i = 0; i < theRona.length; i++){
//     cases.push(
//         L.circle([theRona[i].lat, theRona[i].long], {
//             stroke=false,
//             fillOpacity: .75,
//             color: "yellow",
//             fillColor: "yellow",
//             radius: markerSize(theRona[i].cases)
//         })
//     );
//     deaths.push(
//     L.circle([theRona[i].lat, theRona[i].long, {
//         stroke=false,
//         fillOpacity: .75,
//         color: "yellow",
//         fillColor: "yellow",
//         radius: markerSize(theRona[i].deaths)
//     })
//     );
// }

// var deaths = L.layerGroup(deaths);
// var cases = L.layerGroup(cases);

// var baseMaps = {
//     "Air Quality": waqiLayer
// }

// var overlayMaps = {
//     "COVID-19 Deaths": deaths,
//     "COVID-19 Confirmed Cases": cases 
// };
// var  map  =  L.map('map', {
//     center: [37.09, -95.71],
//       zoom: 5,
//       layers: [osmLayer, waqiLayer, cases, deaths]
//     }); 

// L.control.layers(baseMaps, overlayMaps, {
//         collapsed: false
//       }).addTo(map);
      