import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Search from "./Weather/Search/Search";
import CurrentWeather from "./Weather/CurrentWeather/CurrentWeather";

export default function WeatherWidget() {
  const [currentWeather, setCurrentWeather] = useState("");

  const handleOnSearchChange = useCallback((searchData) => {
    if (searchData) {
      setCurrentWeather({ ...searchData.current, ...searchData.location });
    }
  }, []);

  return (
    <div className="container">
      <h1>Weather Widget</h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <div className="back-button">
        <Link to="/widgets">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
