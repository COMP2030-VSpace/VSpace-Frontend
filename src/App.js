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
import Search from './pages/search/Search';
import Profile from './pages/profile/Profile';

// modifier
import Protected from './pages/protected/Protected';
import BeforeLogin from './pages/protected/BeforeLogin';



// import contexts
import AuthContextProvider from './contexts/AuthContext';
import CommunityContextProvider from './contexts/CommunityContext';
import CollectionContextProvider from './contexts/CollectionContext';
import SearchContextProvider from './contexts/SearchContext';
import ItemContextProvider from './contexts/ItemContext';

function App() {
    return (
        <AuthContextProvider>
            <SearchContextProvider>
                <CommunityContextProvider>
                    <CollectionContextProvider>
                        <ItemContextProvider>
                            <Routes>
                                <Route path='/' element={<HomeV2 />} />

                                <Route path='/register' element={
                                    <BeforeLogin>
                                        <Register />
                                    </BeforeLogin> 
                                } />
                                <Route path='/register/:id' element={
                                    <BeforeLogin>
                                        <Setup />
                                    </BeforeLogin> 
                                } />
                                <Route path='/login' element={
                                    <BeforeLogin>
                                        <Login />
                                    </BeforeLogin> 
                                } />

                                <Route path='/about' element={<About />} />
                                <Route path='/search' element={<Search />} />
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

                                <Route path='/profile/:id' element={
                                    <Profile />
                                } />
                            </Routes>
                        </ItemContextProvider>
                    </CollectionContextProvider>
                </CommunityContextProvider>
            </SearchContextProvider>
        </AuthContextProvider>
    );
}

export default App;
