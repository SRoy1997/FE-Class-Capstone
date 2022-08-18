import { useEffect, useState } from "react";
import { GEO_API_URL } from "../weather_api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (search) {
      const debounce = setTimeout(() => {
        fetch(
          `${GEO_API_URL}current.json?key=${process.env.REACT_APP_KEY}&q=${search}&aqi=no`
        )
          .then((response) => response.json())
          .then((data) => {
            onSearchChange(data);
          })
          .catch((err) => console.log("Get Search Error: ", err));
      }, 600);

      return () => clearTimeout(debounce);
    }
  }, [search, onSearchChange]);

  return (
    <input
      type="search"
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for city"
      value={search}
    />
  );
};

export default Search;
