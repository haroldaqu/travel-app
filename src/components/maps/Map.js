import GoogleMapReact from "google-map-react";

const Map = ({name}) => {
    const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

    return ( 
        <div className={name} id="home-content" >
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCk62ecal104XmdP71n5YGp2NImzTLi7BQ" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >

            </GoogleMapReact>
        </div>
     );
}
 
export default Map;