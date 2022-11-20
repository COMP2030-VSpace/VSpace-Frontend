import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Dashboard from './pages/admin/dashboard/Dashboard';
import CreateCommunity from './pages/admin/community/CreateCommunity';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/admin' element={<Dashboard/>} />
      <Route path='/admin/community/add' element={<CreateCommunity/>} />
    </Routes>
  );
}

export default App;
