import starRatings from "../../utlity/starIcons";

const Card = ({place: {name, ranking, rating, photo, num_reviews, price_level }}) => {

    return ( 
    <div className="card mb-4 ms-2 me-2 shadow bg-white rounded" id="card" >
        { name && 
        <div className="row g-0 p-3">
            <div className="col-md-4">
                <img src={photo ? photo.images.medium.url : null} className="card-img-top rounded" alt={name} />
            </div>
            <div className="col-md-8 m-0" >
                <div className="card-body p-0 px-3">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{ranking}</p>
                    <div className="container d-flex justify-content-between p-0">
                        <p className="card-text text-primary d-inline-block">{starRatings[rating]} <span className="text-muted">{(`(${num_reviews})`)}</span></p>
                        <p className="card-text d-inline-block">{(price_level)}</p>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
     );
}
 
export default Card;