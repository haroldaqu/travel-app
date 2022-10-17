import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { mapStyle } from "../../utlity/mapStyle";

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClick}) => {

    return ( 
        <section className="col d-none d-lg-block" id="home-content" >
          {coordinates && 
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEAPI_KEY }}
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
        </section>
     );
}
 
export default Map;