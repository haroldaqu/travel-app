import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { createRef, useEffect, useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Map from './components/maps/Map';
import Card from './components/card/Card';
import SearchBar from './components/searchbar/SearchBar';
import CardGroup from './components/card/CardGroup';
import Sort from './components/sort/Sort';
import Spinner from './components/spinner/Spinner';
import Toggle from './components/toggle/Toggle';
import ButtonGroup from './components/button-group/ButtonGroup';
import FiltSort from './components/FiltSort/FiltSort';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aa98e4d75mshcd524deb6e7dce3p1d3190jsn21eb5d67de6a',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
}

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [places, setPlaces] = useState(null)
  const [coordinates, setCoordinates] = useState({lat: 34.052235, lng: -118.243683})
  const [bounds, setBounds] = useState({ne: {lat: 34.07768965945131, lng: -118.21763338604737}, sw: {lat: 34.026772695442176, lng: -118.26973261395264}})
  const [type, setType] = useState('hotels')
  const[rating, setRatings] = useState('All')
  const [filters, setFilters] = useState({type: 'hotels', price: 'All', review: 'All'})
  const [loading, setLoading] = useState(false)
  const [childClick, setChildClick] = useState(null)

const fetchPlaces = async (sw, ne) => {
    try {
      const response = await fetch(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${sw.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&tr_latitude=${ne.lat}&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`, options)
      const data = await response.json()
      setPlaces(data.data.filter(place => !place.ad_position))
      setLoading(false)
      console.log('fetch used')
    } catch (error) {
      console.log(error)
    }
}

useEffect(() => {

}, [])


  useEffect(() => {
    setLoading(true)
    fetchPlaces(bounds.sw, bounds.ne)
  },[coordinates, bounds, type])


  return (
    <div className="App container-xxl">
      <Navbar />
      <div className="row ">
        { toggle ?
          <Map  name={"col-6"} setCoordinates={setCoordinates} setBounds={setBounds}  coordinates={coordinates} places={places} setChildClick={setChildClick}/> : null
        }
        <div className={toggle ? "col-6 d-flex" : "col-12 d-flex"} id="home-content" >
          <SearchBar setType={setType}>
            <Toggle  setToggle={setToggle} toggle={toggle} />
          </SearchBar>
          <h6 className='mb-4 ms-2 me-2' >Search results: {places && places.length} {type}</h6>
          <FiltSort setType={setType}/>
          <CardGroup>
            {!loading && places ? places.map((place, i) => <Card key={i} i={i} place={place}/>  ) : <Spinner />} 
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
