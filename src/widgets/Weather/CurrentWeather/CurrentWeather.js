const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div className="location">
          <p className="city">
            {data.name}, {data.region}
          </p>
        </div>
        <div className="looks-like">
          <img
            alt="weather"
            className="weather-icon"
            src={`https://${data.condition.icon}`}
          />
          <p>{data.condition.text}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
            <p className="temperature_f">
              Temperature Fahrenheit: {data.temp_f}°F
            </p>
            <p className="temperature_c">
              Temperature Celsius: {data.temp_c}°C
            </p>
            <p className="humidity">Humidity: {data.humidity}%</p>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <p className="feelslike_f">
              Feels Like Temperature Fahrenheit: {data.feelslike_f}°F
            </p>
            <p className="feelslike_c">
              Feels Like Temperature Celsius: {data.feelslike_c}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
