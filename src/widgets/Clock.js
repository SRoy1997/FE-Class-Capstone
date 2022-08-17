import React, { useEffect, useState } from "react";

export default function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Clock Widget</h1>
      <div style={{ fontSize: "25px" }}>{clockState}</div>
    </div>
  );
}
