const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aa98e4d75mshcd524deb6e7dce3p1d3190jsn21eb5d67de6a',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
}

export const fetchPlaces = async (sw, ne) => {
    try {
      const response = await fetch(`https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=${sw.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&tr_latitude=${ne.lat}&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`, options)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
}