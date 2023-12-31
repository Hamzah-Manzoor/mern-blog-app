import { useState } from 'react';

import Login from "./components/account/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import CreatePost from "./components/create/CreatePost";
import DataProvider from './context/DataProvider';
import Update from './components/create/Update';
import DetailView from './components/details/DetailView';
import EditProfile from './components/editProfile/EditProfile';
import MyBlogs from './components/myBlogs/MyBlogs';
import LikedBlogs from './components/likedBlogs/LikedBlogs';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (

    <DataProvider>
      <BrowserRouter>
        <div style={{marginTop: 64}}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/myBlogs/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/myBlogs/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/likedBlogs/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/likedBlogs/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/myBlogs/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/myBlogs/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route path='/editProfile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/editProfile' element={<EditProfile />} />
            </Route>

            <Route path='/myBlogs' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/myBlogs' element={<MyBlogs />} />
            </Route>

            <Route path='/likedBlogs' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/likedBlogs' element={<LikedBlogs />} />
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
