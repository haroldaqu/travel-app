// const CardGroup = ({children}) => {
//     return ( 
//         <div  className="pt-2" id="card-cont">
//             { children }
//         </div>
//      );
// }


 
// export default CardGroup;

import Spinner from "../spinner/Spinner";
import Card from "./Card";

const CardGroup = ({places, loading}) => {
    return ( 
        <div  className="pt-2" id="card-cont">
            {!loading && places ? places.map((place, i) => <Card key={i} i={i} place={place}/>) : <Spinner />}
        </div>
     );
}
 
export default CardGroup;