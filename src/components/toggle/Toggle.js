const Toggle = ({setToggle, toggle}) => {
    return ( 
        <div class="form-check form-switch fs-5 d-none d-lg-block">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=> setToggle(!toggle)} checked={toggle ? true : false}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Map</label>
        </div>
     );
}
 
export default Toggle;