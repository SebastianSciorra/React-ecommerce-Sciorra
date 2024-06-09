import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logofluo from './assets/logofluo.png';
import CartWidget from '../Cartwidget/CarwtWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar bg-body-tertiary fixed-top d-flex align-items-center">
                <div className="container-fluid d-flex">
                    <div className='navbar.brand d-flex align-items-center  flex-grow-1'>
                        <Link to='/'>
                            <h1>Fluo</h1>
                            <img src={logofluo} className="logo-fluo" alt="logo Fluo" />
                        </Link>
                    </div>
                    <div className="dropdown p-2 ">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</button>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to={'/category/Cuadernos'} className={({ isActive }) => isActive ? 'ActiveOption dropdown-item' : ' Option dropdown-item'}>Cuadernos</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/category/Lapices'} className={({ isActive }) => isActive ? 'ActiveOption dropdown-item' : ' Option dropdown-item'}>Lápices</NavLink>
                            </li>
                            <li>
                               <NavLink to={`/category/Otros`} className={({ isActive }) => isActive ? 'ActiveOption dropdown-item' : ' Option dropdown-item'}>Otros</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
    );
}

export default Navbar