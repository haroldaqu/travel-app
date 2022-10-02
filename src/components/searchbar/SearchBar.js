import { Autocomplete } from "@react-google-maps/api";

const SearchBar = () => {
    return ( 
        <div className="container-fluid mb-2" id="search-bar-cont">
            {/* <Autocomplete> */}
                <div className="input-group" id="search-bar">
                  <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-primary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                </div>

                <div className="">
                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Type</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                          <li><a className="dropdown-item" href="#">Restaurants</a></li>
                          <li><a className="dropdown-item" href="#">Hotels</a></li>
                          <li><a className="dropdown-item" href="#">Attractions</a></li>
                      </ul>
                  </div>
                </div> 
                <div className="">
                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Price</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                          <li><a className="dropdown-item" href="#">$</a></li>
                          <li><a className="dropdown-item" href="#">$$-$$$</a></li>
                          <li><a className="dropdown-item" href="#">$$$$</a></li>
                      </ul>
                  </div>
                </div> 
              {/* </Autocomplete> */}
        </div>
     );
}
 
export default SearchBar;