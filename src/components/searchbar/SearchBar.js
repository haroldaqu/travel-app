import { Autocomplete } from "@react-google-maps/api";

const SearchBar = () => {
    return ( 
        <div id="search-bar">
            {/* <Autocomplete> */}
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>
            {/* </Autocomplete> */}
        </div>
     );
}
 
export default SearchBar;