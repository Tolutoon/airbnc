import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="your@email.com"/>
                <input type="password" placeholder="password"/>
                <button className="primary mt-2">Register</button>
                <div className="text-center mt-2 text-gray-400">Have an account? <Link to={'/login'} className="underline text-black italic">Login</Link></div>
            </form>
            </div>
        </div>
    )
};