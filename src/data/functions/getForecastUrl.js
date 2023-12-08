export function getForecastUrl(isMetric, cityKey) {
    let url

    try {
        if (isMetric) {
            console.log('city Key: ', cityKey)
            url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ
            &metric=true`
            console.log('url :', url)
            return url
        }
        url =  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ
        `
        console.log('city Key: ', cityKey)
        console.log('url :', url)
        return url

    }

    catch(e) {
        console.log('error fetching: ', e)
    }
}