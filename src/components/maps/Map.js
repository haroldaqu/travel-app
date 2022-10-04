import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { mapStyle } from "../../utlity/mapStyle";

const Map = ({name, setCoordinates, setBounds, coordinates, places, setChildClick}) => {

    return ( 
        <div className={`${name} map rounded-3`} id="home-content" >
          {coordinates && 
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCk62ecal104XmdP71n5YGp2NImzTLi7BQ" }}
                options={{styles: mapStyle}}
                defaultCenter={{lat: 10.99835602, lng: 77.01502627}}
                center={coordinates}
                defaultZoom={14}
                onChange={(e) => {
                  setCoordinates({lat: e.center.lat, lng: e.center.lng})
                  setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child) => setChildClick(child)}
            >
              {places && places.map((place, i) =>  <Marker key={i} lat={place.latitude}  lng={place.longitude} place={place}/> )}
            </GoogleMapReact>
          }
        </div>
     );
}
 
export default Map;