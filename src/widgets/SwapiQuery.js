import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchSwapi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [endpoint, setEndpoint] = useState("");

  function handleSearch(e) {
    const queryType = endpoint === "people" ? "name" : "search";

    if (endpoint) {
      fetch(
        `https://www.swapi.tech/api/${endpoint}?${queryType}=${search}&page=1&limit=9999`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data.result || data.results);
        })
        .catch((err) => {
          console.error("Get swapi error: ", err);
        });
    }
  }

  function renderResults() {
    return data.map((item) => {
      return (
        <div key={item.uid}>
          {item.properties?.name || item.properties?.title || item.name}
        </div>
      );
    });
  }

  return (
    <div className="swapi-container">
      <h1>Swapi</h1>

      <div className="swapi-form">
        <select onChange={(e) => setEndpoint(e.target.value)}>
          <option value={null}>Select a Endpoint</option>
          <option>films</option>
          <option>planets</option>
          <option>people</option>
          <option>species</option>
          <option>starships</option>
          <option>vehicles</option>
        </select>

        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="search-bar"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results">
        {!endpoint
          ? "Select an endpoint"
          : data?.length < 1
          ? "Nothing to display"
          : renderResults()}
      </div>

      <div className="back-button">
        <Link to="/widgets">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
