import { useEffect, useState } from "react";
import { GEO_API_URL } from "../api";

const Search = ({ onSearchChange, url, fetchOptions }) => {
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
      placeholder="Serch for city"
      value={search}
    />
  );
};

export default Search;
