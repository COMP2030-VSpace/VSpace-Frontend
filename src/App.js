import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/orders' element={<Orders />} />
      <Route path='/products' element={<Products />} />
      <Route path='/customers' element={<Customers />} /> */}
    </Routes>
  );
}

export default App;
