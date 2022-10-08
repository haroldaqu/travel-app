const FiltSort = ({setType, setRatings, setPriceLevel, setFilteredPlaces, places, setPlaces, setSortPlaces, toggle}) => {
    return ( 
        <div className={toggle ? "col-12 d-flex justify-content-between": "col-lg-6 col-12 d-flex justify-content-between"}>
            <div className="d-flex">
                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle border-0 shadow rounded" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Type</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                        <li><a className="dropdown-item" href="#" onClick={(e) => {
                            setType(e.target.innerText.toLowerCase())
                            setFilteredPlaces(false)
                            }} >Restaurants</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => {
                            setType(e.target.innerText.toLowerCase())
                            setFilteredPlaces(null)
                            }}
                        >Hotels</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => {
                            setType(e.target.innerText.toLowerCase())
                            setFilteredPlaces(null)
                            }}>Attractions</a></li>
                      </ul>
                  </div>
  
                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle border-0 shadow rounded" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Ratings</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                          <li><a className="dropdown-item" href="#" onClick={(e) => setRatings(null)}>All</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => setRatings(e.target.innerText)}>3.0</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => setRatings(e.target.innerText)}>4.0</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => setRatings(e.target.innerText)}>4.5</a></li>
                      </ul>
                  </div>

                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle border-0 shadow  rounded" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Price</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                          <li><a className="dropdown-item" href="#" onClick={(e) => setPriceLevel(null)}>All</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => setRatings(e.target.innerText)}>$</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => setRatings(e.target.innerText)}>$$-$$$</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => setRatings(e.target.innerText)}>$$$$</a></li>
                      </ul>
                  </div>
            </div>
            <div className="dropdown" id="dropdown">
                    <i className="bi bi-sort-down btn dropdown-toggle" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" ><span className="text-primary">Recommended</span></i>
                        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li><a className="dropdown-item" href="#" >Rank</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setSortPlaces(true)}>Reviews</a></li>
                        </ul>
            </div>
        </div>
    );
}
 
export default FiltSort;