import { Autocomplete } from "@react-google-maps/api";

const SearchBar = ({setType, children}) => {
    return ( 
        <div className="container-fluid d-flex align-items-center mb-4 ms-2 me-2" id="search-bar-cont">
            {/* <Autocomplete> */}
                <div className="input-group shadow p-3 bg-white rounded" id="search-bar">
                  <input type="text" className="form-control border-0 rounded-0"  placeholder="Search location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-primary rounded" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                </div>
                {children}
              {/* </Autocomplete> */}
        </div>
     );
}
 
export default SearchBar;