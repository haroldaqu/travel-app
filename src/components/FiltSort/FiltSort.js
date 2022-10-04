const FiltSort = ({setType}) => {
    return ( 
        <div className="container d-flex justify-content-between  align-items-center p-0 mb-4 ms-2 me-2" id="filter-cont">
                <div className="">
                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle border-0 shadow p-3 rounded" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Type</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                        <li><a className="dropdown-item" href="#" onClick={(e) => setType(e.target.innerText.toLowerCase() )} >Restaurants</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => setType(e.target.innerText.toLowerCase())}>Hotels</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => setType(e.target.innerText.toLowerCase())}>Attractions</a></li>
                      </ul>
                  </div>
                </div> 
                <div className="">
                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle border-0 shadow p-3 rounded" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Reviews</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                          <li><a className="dropdown-item" href="#" >All</a></li>
                          <li><a className="dropdown-item" href="#">3.0</a></li>
                          <li><a className="dropdown-item" href="#">4.0</a></li>
                          <li><a className="dropdown-item" href="#">4.5</a></li>
                      </ul>
                  </div>
                </div>
                <div className="">
                  <div className="dropdown" id="dropdown">
                      <button className="btn btn-outline-primary dropdown-toggle border-0 shadow p-3 rounded" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Price</button>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                          <li><a className="dropdown-item" href="#">All</a></li>
                          <li><a className="dropdown-item" href="#">$</a></li>
                          <li><a className="dropdown-item" href="#">$$-$$$</a></li>
                          <li><a className="dropdown-item" href="#">$$$$</a></li>
                      </ul>
                  </div>
                </div>

            <div className="dropdown" id="dropdown">
                    <i className="bi bi-sort-down btn dropdown-toggle" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" >Sort By: <span className="text-primary">Recommended</span></i>
                        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li><a className="dropdown-item" href="#" >Restaurants</a></li>
                            <li><a className="dropdown-item" href="#" >Hotels</a></li>
                            <li><a className="dropdown-item" href="#" >Attractions</a></li>
                        </ul>
            </div>
        </div>
    );
}
 
export default FiltSort;