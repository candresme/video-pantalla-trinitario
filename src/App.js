import React, { useContext } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

//Pages imports
import Index from './pages/user/Index.jsx';
import Admin from './pages/admin/Admin.jsx';
import Login from './pages/admin/Login.jsx';
import Config from './pages/admin/Config';
import Profile from './pages/admin/Profile';
import Screen from './pages/user/Screen';
import ScreenSelectPlaylist from './pages/user/ScreenSelectPlaylist';
import Reproductor from './pages/user/Reproductor';

//Components imports
import Products from './components/admin/Products';
import ProductDetail from './components/admin/ProductDetail';
import CreateProducts from './components/admin/CreateProducts';

import Categories from './components/admin/Categorys';
import CreateCategories from './components/admin/CreateCategories';
import CategoryDetail from './components/admin/CategoryDetail';

import Locations from './components/admin/Locations';
import LocationDetail from './components/admin/LocationDetail';
import CreateLocation from './components/admin/CreateLocation';

import Playlist from './components/admin/Playlist';
import PlaylistDetail from './components/admin/PlaylistDetail';
import CreatePlaylist from './components/admin/CreatePlaylist';

import Videos from './components/admin/Videos';
import VideoDetail from './components/admin/VideoDetail';
import CreateVideo from './components/admin/CreateVideo';


//Contexts imports
import { UserContext } from './contexts/AuthContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">   
        <Routes>
          <Route path='/' exact element={<Index />} />
          <Route path='/login/' exact element={<Login />} />  
          <Route path='/screen/' exact element={<Screen />} />  
          <Route path='/select-play/:idSede' exact element={<ScreenSelectPlaylist />} />
          <Route path='/reproductor/:idPlay' exact element={<Reproductor />} />         


          {user ? (
            <Route path="/admin" exact element={<Admin />} >

              <Route path="products/search" exact element={<Products />} />
              <Route path="products/create" exact element={<CreateProducts />} />
              <Route path="products/:productId" exact element={<ProductDetail />} />

              <Route path="categories/search" exact element={<Categories />} />
              <Route path="categories/create" exact element={<CreateCategories />} />
              <Route path="category/:categoryId" exact element={<CategoryDetail />} />

              <Route path="locations/search" exact element={<Locations />} />
              <Route path="locations/create" exact element={<CreateLocation />} />
              <Route path="locations/:locationId" exact element={<LocationDetail />} />      
              
              <Route path="playlist/search" exact element={<Playlist />} />
              <Route path="playlist/create" exact element={<CreatePlaylist />} />
              <Route path="playlist/:playlistId" exact element={<PlaylistDetail />} />

              <Route path="videos/search" exact element={<Videos />} />
              <Route path="videos/create" exact element={<CreateVideo />} />
              <Route path="videos/:videoId" exact element={<VideoDetail />} /> 

              <Route path="config" exact element={<Config />} />
              <Route path="profile" exact element={<Profile />} />
            </Route>
          ) : (
            <Route path="*" exact element={<Navigate to="/login" replace />} />              
          )}          
        </Routes>
    </div>
  );
}

export default App;
