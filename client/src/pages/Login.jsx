import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input className="p-2" type="email" placeholder="your@email.com" />
          <input className="p-2" type="password" placeholder="password" />
          <button className="primary mt-2">Login</button>
          <div className="text-center mt-2 text-gray-400">
            Don't have an account yet? <Link to={'/register'} className="underline italic text-black">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
