export function Card({ localizedName, weatherText, value, date, unit }) {
  if (!date) {
    return (
      <section>
        <h1>{localizedName}</h1>
        <h2>
          {value} {unit}
        </h2>
        <h2>{weatherText}</h2>
      </section>
    );
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date).getDay();

  return (
    <section>
      <h1>{daysOfWeek[day]}</h1>
      <h2>
        {value} {unit}
      </h2>
      <h2>{weatherText}</h2>
    </section>
  );

}
