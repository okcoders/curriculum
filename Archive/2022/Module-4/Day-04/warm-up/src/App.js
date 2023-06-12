import "./App.css";
import { useState } from "react";

function App() {
  // const state = useState("");
  // const email = state[0]
  // const setEmail = state[1]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }

  console.log(email);

  return (
    <div className="App">
      <form onSubmit={submit}>
        <div>
          <label>email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{email}</p>
        </div>
        <div>
          <label>password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{password}</p>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
