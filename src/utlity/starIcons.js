    const star = <i className="bi bi-star"></i>
    const starHalf = <i className="bi bi-star-half"></i>
    const starFill = <i className="bi bi-star-fill"></i>

    const starRatings = {
        '5.0' : [starFill, starFill, starFill, starFill, starFill],
        '4.5' : [starFill, starFill, starFill, starFill, starHalf],
        '4.0' : [starFill, starFill, starFill, starFill, star],
        '3.5' : [starFill, starFill, starFill, starHalf, star],
        '3.0' : [starFill, starFill, starFill, star, star],
        '2.5' : [starFill, starFill, starHalf, star, star],
        '2.0' : [starFill, starFill, star, star, star],
        '1.5' : [starFill, starHalf, star, star, star],
        '1.0' : [starFill, star, star, star, star],
        '0.5' : [starHalf, star, star, star, star],
    }

export default starRatings