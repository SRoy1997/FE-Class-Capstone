import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../components/LoginAuth/UserProvider";

export default function LoginPage() {
  const history = useHistory();
  const { setUser, setAuthIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setAuthIsLoading(true);
    setErrorMsg("");

    fetch("https://www.devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthIsLoading(false);
        if (data.message === "Logged In") {
          history.push("/dashboard");
          setUser(data.user);
        }
        setErrorMsg("invalid credentials");
      })
      .catch((err) => {
        setAuthIsLoading(false);
        setErrorMsg("Invalid Credentials");
        console.error("Login Error: ", err);
      });
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
        {errorMsg}
      </form>
    </div>
  );
}
