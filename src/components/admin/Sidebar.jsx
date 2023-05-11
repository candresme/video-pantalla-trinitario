import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const isProductsActive = location.pathname.includes('/products');
    const isCategoriesActive = location.pathname.includes('/categories');
    const isLocationsActive = location.pathname.includes('/locations');
    const isVideosActive = location.pathname.includes('/videos/');
    const isPlaylistActive = location.pathname.includes('/playlist/');

    return (
        <div>
            <div className="d-flex flex-column p-3 bg-light m-0" style={{height: "100vh"}}>
                <a href="#/admin/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <span className="fs-4">Trinitario Coffee</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto text-start">
                    <li className="nav-item">
                        
                        <div className="dropdown">
                            <a href="#/admin/products/search" className={`link-offset-2 ${isProductsActive && "active"} nav-link dropdown-toggle`}  role="button" id="productsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                                <li><a className="dropdown-item" href="#/admin/products/create">Crear</a></li>
                                <li><a className="dropdown-item" href="#/admin/products/search">Consultar</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <a className={`nav-link link-offset-2 dropdown-toggle ${isCategoriesActive && "active"}`} href="./" role="button" id="categoriesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías de productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                                <li><a className="dropdown-item" href="#/admin/categories/create">Crear</a></li>
                                <li><a className="dropdown-item" href="#/admin/categories/search">Consultar</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        
                        <div className="dropdown">
                            <a href="#/admin/locations/" className={`nav-link link-offset-2 dropdown-toggle ${isLocationsActive && "active"}`} role="button" id="locationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                                Sedes
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="locationsDropdown">
                                <li><a className="dropdown-item" href="#/admin/locations/create">Crear</a></li>
                                <li><a className="dropdown-item" href="#/admin/locations/search">Consultar</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>                        
                        <div className="dropdown">
                            <a href="#/admin/videos/" className={`nav-link link-offset-2 dropdown-toggle ${isVideosActive && "active"}`}role="button" id="videosDropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                                Videos
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="videosDropdown">
                                <li><a className="dropdown-item" href="#/admin/videos/create">Crear</a></li>
                                <li><a className="dropdown-item" href="#/admin/videos/search">Consultar</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>                        
                        <div className="dropdown">
                            <a href="#/admin/playlist/" className={`link-offset-2 dropdown-toggle nav-link ${isPlaylistActive && "active"}`}role="button" id="playlistDropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                                Playlist pantallas
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="playlistDropdown">
                                <li><a className="dropdown-item" href="#/admin/playlist/create">Crear</a></li>
                                <li><a className="dropdown-item" href="#/admin/playlist/search">Consultar</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="./" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>Usuario</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#/admin/profile/">Perfil</a></li>
                    <li><a className="dropdown-item" href="#/admin/config/">Configuración</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="./">Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}

export default Sidebar