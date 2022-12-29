import { Routes, Route } from 'react-router-dom'
import "./App.scss";

// import pages
import HomeV2 from './pages/home/HomeV2';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Dashboard from './pages/admin/dashboard/Dashboard';
import CreateCommunity from './pages/admin/community/CreateCommunity';
import CreateCollection from './pages/admin/collection/CreateCollection';
import Setup from './pages/register/Setup';
import Item from './pages/admin/item/CreateItem';
import Community from './pages/admin/community/Community';
import ImportMetaData from './pages/admin/import/ImportMetaData';
import ImportBatch from "./pages/admin/import/ImportBatch";



// import contexts
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<HomeV2/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/community/add' element={<CreateCommunity/>} />
        <Route path='/admin/collection/add' element={<CreateCollection/>} />
        <Route path='/register/setup' element={<Setup/>} />
        <Route path='/admin/item/add' element={<Item/>} />
        <Route path='/admin/community/:id' element={<Community/>} />
        <Route path='/admin/import/metadata' element={<ImportMetaData/>} />
        <Route path='/admin/import/batch' element={<ImportBatch/>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
