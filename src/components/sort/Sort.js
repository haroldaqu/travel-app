const Sort = () => {
    return (
          <div className="container mb2" id="sort-cont">
          
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
 
export default Sort;