import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Register from './pages/register/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
