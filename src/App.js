import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { useEffect, useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Map from './components/maps/Map';
import SearchBar from './components/searchbar/SearchBar';
import CardGroup from './components/card/CardGroup';
import Toggle from './components/toggle/Toggle';
import FiltSort from './components/FiltSort/FiltSort';


const App = () => {
  const [toggle, setToggle] = useState(true)
  const [places, setPlaces] = useState(null)
  const [filteredPlaces, setFilteredPlaces] = useState(false)
  const [coordinates, setCoordinates] = useState({lat: 34.052235, lng: -118.243683})
  const [bounds, setBounds] = useState({ne: {lat: 34.07768965945131, lng: -118.21763338604737}, sw: {lat: 34.026772695442176, lng: -118.26973261395264}})
  const [type, setType] = useState('hotels')
  const[ratings, setRatings] = useState(null)
  const [priceLevel, setPriceLevel] = useState(null)
  const [sortPlaces, setSortPlaces] = useState(null)
  const [loading, setLoading] = useState(false)
  const [childClick, setChildClick] = useState(null)


  const fetchPlaces = async (sw, ne) => {
      // const apiKey = 'netlify/functions/apiKey.js'
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          // 'X-RapidAPI-Key': '1c51db29eamsh83fa7a3d28d615ap1daaa1jsned4c6cddcfed',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
      try {
        // console.log(apiKey)
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
    setLoading(true)
    fetchPlaces(bounds.sw, bounds.ne)
  },[])

useEffect(() => {
  const filteredRatings = places?.filter(place => place.rating > ratings)
  // const filteredPriceLevels = places?.filter(place => place.priceLevel > place.priceLevel)
  // const filteredBoth = places?.filter(place => place.rating > ratings).filter(place => place.priceLevel > priceLevel)
    setFilteredPlaces(filteredRatings)
}, [ratings])

useEffect(() => {
  const sortedPlaces = places?.sort((a,b) => Number(b.num_reviews) - Number(a.num_reviews))
  setPlaces(sortedPlaces)
}, [sortPlaces])


  useEffect(() => {
    setLoading(true)
    fetchPlaces(bounds.sw, bounds.ne)
  },[coordinates, bounds, type, filteredPlaces, ratings, sortPlaces, toggle])


  return (
    <div className="App container">
      <Navbar />
      <main className="row">
        { toggle &&
          <Map  setCoordinates={setCoordinates} setBounds={setBounds}  coordinates={coordinates} places={filteredPlaces ? filteredPlaces : places} setChildClick={setChildClick}/> 
        }
        <section className="col" id="home-content" >
            <div className="row h-25">
              <SearchBar setType={setType} setCoordinates={setCoordinates} toggle/>
              <FiltSort setType={setType} setRatings={setRatings} setPriceLevel={setPriceLevel} setFilteredPlaces={setFilteredPlaces} places={places} setPlaces={setPlaces} setSortPlaces={setSortPlaces} toggle/>
              <div className="col-12 d-flex justify-content-between">
                <h6>Search results: {places && filteredPlaces ? filteredPlaces.length : places ? places.length : null} {type}</h6>
                <Toggle  setToggle={setToggle} toggle={toggle} />
              </div>
            </div>
            <CardGroup  places={filteredPlaces ? filteredPlaces : places} loading={loading}  toggle/>
        </section>
      </main>
    </div>
  );
}

export default App;
