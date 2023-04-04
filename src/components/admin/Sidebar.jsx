import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const isProductsActive = location.pathname.includes('/products');
    const isCategoriesActive = location.pathname.includes('/categories');
    const isLocationsActive = location.pathname.includes('/locations');

    return (
        <div>
            <div className="d-flex flex-column p-3 bg-light m-0" style={{height: "100vh"}}>
                <a href="#/admin/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span className="fs-4">Mi Negocio</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto text-start">
                    <li className="nav-item">
                    <a href="#/admin/products/" className={`nav-link ${isProductsActive ? "active" : ""}`}>
                        Productos
                    </a>
                    </li>
                    <li>
                    <a href="#/admin/categories/" className={`nav-link ${isCategoriesActive ? 'active' : ''}`}>
                        Categorías
                    </a>
                    </li>
                    <li>
                    <a href="#/admin/locations/" className={`nav-link ${isLocationsActive ? "active" : ""}`}>
                        Sedes
                    </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="./" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
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