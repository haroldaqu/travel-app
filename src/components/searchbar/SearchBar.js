import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

const SearchBar = ({setType, children, setCoordinates, toggle}) => {
  const [autocomplete, setAutocomplete] = useState(null)
  
  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({lat, lng})
  }

    return ( 
        <div  className={toggle ? "col-12": "col-lg-6 col-12"}>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className="input-group shadow p-2 bg-white rounded">
                  <input type="text" className="form-control border-0 rounded-0"  placeholder="Search location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-primary rounded" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                </div>
            </Autocomplete>
            {children}
        </div>
     );
}
 
export default SearchBar;

// className="container-fluid d-flex align-items-center mb-4 ms-2 me-2" 