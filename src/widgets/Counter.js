import { useState } from "react";
import { Link } from "react-router-dom";

function Button(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counterWidget">
      <h2> Counter </h2>

      <div className="counterButtons">
        <Button title="-" action={decrementCount} />
        <h4>{count}</h4>
        <Button title="+" action={incrementCount} />
      </div>

      <div className="back-button">
        <Link to="/widgets">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
