export function getForecastUrl(isMetric, cityKey) {
    let url

    try {
        if (isMetric) {
  
            url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=Yw4tZabnAQADJjgvR4d2A0gxb9VDaHs7
            &metric=true`
            return url
        }
        url =  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=Yw4tZabnAQADJjgvR4d2A0gxb9VDaHs7
        `
        return url

    }

    catch(e) {
        throw new Error('error fetching: ', e)
    }
}