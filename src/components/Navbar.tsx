import React from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <h1>VANGUARDIA<span>ESTÉTICA</span></h1>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><a href="#treatments" onClick={() => setIsOpen(false)}>Tratamientos</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre Nosotros</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
          <li className="mobile-only"><button className="btn-primary">Pedir Cita</button></li>
        </ul>

        <button className="btn-primary desktop-only">Pedir Cita</button>

        <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
