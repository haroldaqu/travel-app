const Toggle = ({setToggle, toggle}) => {
    return ( 
        <div class="form-check form-switch fs-5">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=> setToggle(!toggle)} checked={toggle ? true : false}/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Map</label>
        </div>
     );
}
 
export default Toggle;