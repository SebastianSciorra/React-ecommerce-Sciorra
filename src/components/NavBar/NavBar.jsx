import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logofluo from './assets/logofluo.png';
import CartWidget from '../Cartwidget/CarwtWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar  fixed-top  d-flex align-items-center">
                <div className="container-fluid d-flex">
                    <Link className='navbar-brand d-flex align-items-center  flex-grow-1' to='/'>
                        <img src={logofluo} className="logo-fluo" alt="logo Fluo" />
                        <h1 className="mb-0">Fluo</h1>
                    </Link>
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
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </div>
            </nav>
    );
}

export default Navbar