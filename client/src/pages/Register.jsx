import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(ev) {
    ev.preventDefault();
    axios.post('http://localhost:4000/register', {
            name, email, password,
    });
  }

  return (
    <div className="grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="primary mt-2">Register</button>
          <div className="text-center mt-2 text-gray-400">
            Have an account?{" "}
            <Link to={"/login"} className="underline text-black italic">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
