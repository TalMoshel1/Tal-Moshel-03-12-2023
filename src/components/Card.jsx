export function Card({ LocalizedName, WeatherText, Value, date, Context }) {
    
  if (!date) {
    return (
        <section>
        <h1>{location.LocalizedName}</h1>
          <h2>
            {getCurrentWeatherJson[0].Temperature.Metric.Value} {getCurrentWeatherJson[0].Temperature.Metric.Unit}
          </h2>
        </section>
    );
  }

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = new Date(date).getDay()


  console.log(daysOfWeek[day])
}
