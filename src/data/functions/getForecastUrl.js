export function getForecastUrl(isMetric, cityKey) {
    let url

    try {
        if (isMetric) {
            console.log('city Key: ', cityKey)
            url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=evfOeo7HTiSJxNySGtxtSOiQvtHlNXqi&metric=true`
            console.log('url :', url)
            return url
        }
        url =  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=evfOeo7HTiSJxNySGtxtSOiQvtHlNXqi`
        console.log('city Key: ', cityKey)
        console.log('url :', url)
        return url

    }

    catch(e) {
        console.log('error fetching: ', e)
    }
}