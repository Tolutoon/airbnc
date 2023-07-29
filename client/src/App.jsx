import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import axios from 'axios';


axios.defaults.withCredentials = true;

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Route>
    </Routes>
  )
}

export default App;
