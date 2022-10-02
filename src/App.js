import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/navbar/Navbar';
import Map from './components/maps/Map';
import Card from './components/card/Card';
import SearchBar from './components/searchbar/SearchBar';
import { useEffect, useState } from 'react';
import CardGroup from './components/card/CardGroup';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aa98e4d75mshcd524deb6e7dce3p1d3190jsn21eb5d67de6a',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
}

const App = () => {
  const [data, setData] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  const [bounds, setBounds] = useState(null)

  const fetchData = async (sw, ne) => {
    try {
      const response = await fetch(`https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=11.847676&bl_longitude=108.473209&tr_longitude=109.149359&tr_latitude=12.838442&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`, options)
      const data = await response.json()
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setCoordinates({lat: 34.052235, lng: -118.243683})
    fetchData()
  },[])

  return (
    <div className="App">
      <Navbar />
      <div className="container-xxl">
        <div className="row ">
          <Map  name={"col-6 "} setCoordinates={setCoordinates} setBounds={setBounds}  coordinates={coordinates}/>
          <div className="col-6 d-flex" id="home-content" >
            <SearchBar />
            <div className="container d-flex justify-content-between text-align-center mb2" id="sort-cont">
              <p>Restaurants around Los Angeles</p>
                  <div className="dropdown" id="dropdown">
                    <i className="bi bi-sort-down btn dropdown-toggle" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" >Sort By: <span className="text-primary">Recommended</span></i>
                      <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                          <li><a className="dropdown-item" href="#">Restaurants</a></li>
                          <li><a className="dropdown-item" href="#">Hotels</a></li>
                          <li><a className="dropdown-item" href="#">Attractions</a></li>
                      </ul>
                  </div>
            </div>
            <CardGroup>
              {data && data.map((item, i) => <Card key={i} item={item} /> )}
            </CardGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
