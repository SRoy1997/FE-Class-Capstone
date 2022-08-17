import { useCallback, useState } from "react";

import Search from "./Weather/Search/Search";
import CurrentWeather from "./Weather/CurrentWeather/CurrentWeather";

export default function WeatherWidget() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = useCallback((searchData) => {
    if (searchData) {
      setCurrentWeather({ ...searchData.current, ...searchData.location });
    }
  }, []);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}
