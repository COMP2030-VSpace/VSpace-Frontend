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
import Protected from './pages/protected/Protected';



// import contexts
import AuthContextProvider from './contexts/AuthContext';
import CommunityContextProvider from './contexts/CommunityContext';
import CollectionContextProvider from './contexts/CollectionContext';
import ItemContextProvider from './contexts/ItemContext';

function App() {
    return (
        <AuthContextProvider>
            <CommunityContextProvider>
                <CollectionContextProvider>
                    <ItemContextProvider>
                        <Routes>
                            <Route path='/' element={<HomeV2 />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/register/:id' element={<Setup />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/admin' element={
                                <Protected>
                                    <Dashboard />
                                </Protected>
                            } />
                            <Route path='/admin/community/add' element={
                                <Protected>
                                    <CreateCommunity />
                                </Protected>
                            } />
                            <Route path='/admin/collection/add' element={
                                <Protected>
                                    <CreateCollection />
                                </Protected>
                            } />
                            
                            <Route path='/admin/item/add' element={
                                <Protected>
                                    <Item />
                                </Protected>
                            } />
                            <Route path='/admin/community/:id' element={
                                <Protected>
                                    <Community />
                                </Protected>
                            } />
                            <Route path='/community/:id' element={
                                <Community />
                            } />
                        </Routes>
                    </ItemContextProvider>
                </CollectionContextProvider>
            </CommunityContextProvider>
        </AuthContextProvider>
    );
}

export default App;
