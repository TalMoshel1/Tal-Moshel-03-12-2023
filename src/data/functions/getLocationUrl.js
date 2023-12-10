
export function getLocationUrl(location, isGeoApi) {
    let url
        if (!isGeoApi) {
            url =`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Yw4tZabnAQADJjgvR4d2A0gxb9VDaHs7
            &q=${location}`
            return url
        }
            url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Yw4tZabnAQADJjgvR4d2A0gxb9VDaHs7&q=${location.coordinates.lat}%2C${location.coordinates.lng}`
            return url
    
}
