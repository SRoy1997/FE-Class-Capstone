import { useState } from "react";

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

      <form onSubmit={handleSubmit}>
        <input
          name="color"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button>Change Color</button>
      </form>
    </div>
  );
}
