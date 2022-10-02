const Card = () => {
    return ( 
        <div className="col" id="card">
            <div className="card">
                <img src="https://cdn.dribbble.com/users/1051363/screenshots/15062029/media/7e6c9e8e688abe066748b8c34f678a08.jpg?compress=1&resize=1200x900&vertical=top"  className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Restaurant Name</h5>
                    <h6 className="card-text">Ranking</h6>
                    <p className="card-text">Ratings</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;