import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logofluo from './assets/logofluo.png';
import CartWidget from '../Cartwidget/CarwtWidget';
import './NavBar.css';

const Navbar = () => {
    return (
            <nav className="navbar bg-body-tertiary fixed-top d-flex align-items-center">
                <div className="container-fluid d-flex">
                    <div className='navbar.brand d-flex align-items-center  flex-grow-1'>
                        <h1>Fluo</h1>
                        <img src={logofluo} className="logo-fluo" alt="logo Fluo" />
                    </div>
                    <div className="dropdown p-2 ">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">Cuadernos</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Lápices</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Otros</a>
                            </li>  
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
    );
}

export default Navbar