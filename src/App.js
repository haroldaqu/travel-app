import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar/Navbar';
import Map from './components/maps/Map';
import Card from './components/card/Card';
import SearchBar from './components/searchbar/SearchBar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container-xxl">
        <div className="row">
          <Map  name={"col-5 "} />
          <div className="col-7" id="home-content" >
            <SearchBar />
            <div className="row row-cols-md-2 g-4" id="card-cont">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
