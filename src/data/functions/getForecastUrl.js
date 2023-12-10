export function getForecastUrl(isMetric, cityKey) {
    let url

    try {
        if (isMetric) {
  
            url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=kLBFG7ks0fYmfw5znsZ5QYEkkgZbHsjh
            &metric=true`
            return url
        }
        url =  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=kLBFG7ks0fYmfw5znsZ5QYEkkgZbHsjh
        `
        return url

    }

    catch(e) {
        throw new Error('error fetching: ', e)
    }
}