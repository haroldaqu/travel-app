import Spinner from "../spinner/Spinner";
import Card from "./Card";
import LargeCard from "./LargeCard";

const CardGroup = ({places, loading, toggle}) => {
    return ( 
        <div  className="row h-75 ps-2 pe-2" id="card-cont">
            {!loading && places ? places.map((place, i) =>  <Card key={i} i={i} place={place}  toggle/>) : <Spinner />}
            {/* {toggle && !loading && places ? places.map((place, i) => <Card key={i} i={i} place={place}  toggle/>): toggle && !loading && places ? places.map((place, i) => <LargeCard key={i} i={i} place={place}  toggle/>) : <Spinner />} */}
        </div>
     );
}
 
export default CardGroup;