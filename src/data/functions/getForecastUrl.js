export function getForecastUrl(isMetric, cityKey) {
    let url

    try {
        if (isMetric) {
            console.log('city Key: ', cityKey)
            url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl&metric=true`
            console.log('url :', url)
            return url
        }
        url =  `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl`
        console.log('city Key: ', cityKey)
        console.log('url :', url)
        return url

    }

    catch(e) {
        console.log('error fetching: ', e)
    }
}