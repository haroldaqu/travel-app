import GoogleMapReact from "google-map-react";
import { mapStyle } from "../../utlity/mapStyle";

const Map = ({name, setCoordinates, setBounds, coordinates}) => {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

    return ( 
        <div className={name} id="home-content" >
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
            >
            </GoogleMapReact>
          }
        </div>
     );
}
 
export default Map;