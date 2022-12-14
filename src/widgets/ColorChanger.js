import { useState } from "react";
import { Link } from "react-router-dom";

export default function ColorChanger() {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("black");

  function handleSubmit(e) {
    e.preventDefault();

    setColor("");
    setMessage(e.target.color.value);
  }

  return (
    <div className="ColorWidget">
      <h1 style={{ color: message }}>
        {message && message[0].toUpperCase() + message.slice(1)}
      </h1>

      <form onSubmit={handleSubmit} className="color-form">
        <input
          name="color"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button>Change Color</button>
      </form>

      <div className="back-button">
        <Link to="/widgets">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
