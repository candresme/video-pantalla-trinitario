import React, { useContext } from 'react';
import './App.css';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages imports
import Index from './pages/user/Index.jsx';
import Admin from './pages/admin/Admin.jsx';
import Login from './pages/admin/Login.jsx';
import ProductDetail from './pages/admin/ProductDetail';
import Products from './pages/admin/Products';
import Categories from './pages/admin/Categorys';
import Locations from './pages/admin/Locations';
import Config from './pages/admin/Config';
import Profile from './pages/admin/Profile';

//Contexts imports
import { UserContext } from './contexts/AuthContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">    
      <HashRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login/' element={<Login />} />          
          {user ? (
            <Route path="/admin" element={<Admin />} >
              <Route path="products" element={<Products />} />
              <Route path="products/:productId" element={<ProductDetail />} />
              <Route path="categories" element={<Categories />} />
              <Route path="locations" element={<Locations />} />
              <Route path="config" element={<Config />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />              
          )}          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
