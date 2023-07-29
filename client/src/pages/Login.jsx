import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      await axios.post('http://localhost:4000/login', {
        email, password
      });
      alert('Login Successful')
      setRedirect(true);
    } catch (e) {
      alert ('Login Failed')
    }
  } 

  if (redirect) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
          <input
            className="p-2"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="p-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="primary mt-2">Login</button>
          <div className="text-center mt-2 text-gray-400">
            Don't have an account yet?{" "}
            <Link to={"/register"} className="underline italic text-black">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
