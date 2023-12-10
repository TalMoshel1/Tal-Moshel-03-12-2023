
export function getLocationUrl(location, isGeoApi) {
    let url
        if (!isGeoApi) {
            url =`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=kLBFG7ks0fYmfw5znsZ5QYEkkgZbHsjh
            &q=${location}`
            return url
        }
            url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=kLBFG7ks0fYmfw5znsZ5QYEkkgZbHsjh&q=${location.coordinates.lat}%2C${location.coordinates.lng}`
            return url
    
}
