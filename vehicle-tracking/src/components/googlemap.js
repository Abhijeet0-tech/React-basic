import {GoogleApiWrapper,Map,Marker,google} from 'google-maps-react'
import {LoadScript,GoogleMap, MarkerF,Autocomplete} from '@react-google-maps/api'
import { useState } from 'react';

export  function CustomMap() {
    
    const [map,setMap]= useState(/** @type google.maps.Map */ (null))

    const Berlin = {
        latitude: 52.5200066,
        longitude: 13.404954
      };
    
      const Frankfurt = {
        latitude: 50.1109221,
        longitude: 8.6821267
      };
    
    const center={ 
        lat: 41.3954,
        lng: 2.162 
      }

    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 41.3954,
            lng: 2.162 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 41.3917,
            lng: 2.1649
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 41.3773,
            lng: 2.1585
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 41.3797,
            lng: 2.1682
          },
        },
        {
          name: "Location 5",
          location: { 
            lat: 41.4055,
            lng: 2.1915
          },
        }
      ];

      const [ selected, setSelected ] = useState({});
  
      const onSelect = item => {
        setSelected(item);
      }

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 31.3851, 
    lng: 2.1734
  }

console.log("google",google)

  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var haight = new google.maps.LatLng(37.7699298, -122.4469157);
  var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
  var mapOptions = {
    zoom: 14,
    center: haight
  }
  var map1 = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);

      
      return (
      
        <div>
            {<button onClick={() => {map.panTo(center)}}>
                 RECENTER
            </button> }
            <div>
<strong>Mode of Travel: </strong>
<select id="mode" onchange="calcRoute();">
  <option value="DRIVING">Driving</option>
  <option value="WALKING">Walking</option>
  <option value="BICYCLING">Bicycling</option>
  <option value="TRANSIT">Transit</option>
</select>
</div>

<LoadScript
googleMapsApiKey='AIzaSyCaq7JXPgkDinbjN5DZnSRD7nNwib-jcww'>
 <GoogleMap
  mapContainerStyle={mapStyles}
  zoom={13}
  center={defaultCenter}>
{
    locations.map(item => {
      return (
      <MarkerF key={item.name} position={item.location}/>
      )
    })
    }
     </GoogleMap>
     
</LoadScript>
        </div>)

};

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(CustomMap);