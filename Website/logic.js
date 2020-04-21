

$.getJSON("theRona.json", function(json) {
    //console.log(json); // this will show the info it in console
    theRona = json;


var  OSM_URL  =  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  
var  OSM_ATTRIB  =  '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';  
var  osmLayer  =  L.tileLayer(OSM_URL,  {attribution:  OSM_ATTRIB});  

var  WAQI_URL    =  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";  
var  WAQI_ATTR  =  'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
var  waqiLayer  =  L.tileLayer(WAQI_URL,  {attribution:  WAQI_ATTR});  

// var  map  =  L.map('map').setView([51.505,  -0.09],  11);  
// map.addLayer(osmLayer).addLayer(waqiLayer);  

console.log(theRona)

var cases = [];
var deaths = [];

for (var i = 0; i < theRona.length; i++){
    if (theRona[i].lat !== null && theRona[i].long !== null && theRona[i].country !== null) {
    var caseToDeathRatio = Math.round(theRona[i].deaths/theRona[i].cases*100)
    cases.push(
        L.circle([theRona[i].lat, parseFloat(theRona[i].long)], {
            fillOpacity: .25,
            color: "red",
            fillColor: "red",
            radius: theRona[i].cases * 5
        }).bindPopup("<h3>Country: " + theRona[i].country_name + "</h3><h3>Cases: " + theRona[i].cases + "<h3><h3>Deaths: " + theRona[i].deaths + "</h3><h3>Death to Case Ratio: " + caseToDeathRatio + "%</h3>")
    );
    deaths.push(
    L.circle([theRona[i].lat, parseFloat(theRona[i].long)], {
        fillOpacity: .75,
        color: "black",
        fillColor: "black",
        radius: theRona[i].deaths * 15
        }).bindPopup("<h3>Country: " + theRona[i].country_name + "</h3><h3>Cases: " + theRona[i].cases + "<h3><h3>Deaths: " + theRona[i].deaths + "</h3><h3>Death to Case Ratio: " + caseToDeathRatio + "%</h3>")
    )}};
;

console.log(deaths);

var deaths = L.layerGroup(deaths);
// console.log("finished")
var cases = L.layerGroup(cases);

var baseMaps = {
    "Base Map": osmLayer
}

var overlayMaps = {
    "COVID-19 Deaths": deaths,
    "COVID-19 Confirmed Cases": cases,
    "Air Quality Index": waqiLayer 
};

var  map  =  L.map('map', {
    center: [37.09, -95.71],
      zoom: 5,
      layers: [osmLayer, waqiLayer, cases, deaths]
    }); 

    console.log("hola");    
 
L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(map);
});     