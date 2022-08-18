import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="Clock">
      <h1>Clock Widget</h1>

      <div style={{ fontSize: "25px" }}>{clockState}</div>

      <div className="back-button">
        <Link to="/widgets">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
