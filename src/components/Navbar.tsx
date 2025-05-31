import { useState } from "react";
import { Link } from "react-router-dom";
import Clara from "../assets/logo.png"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-black shadow-md fixed top-0 left-0 z-10">

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl flex flex-row items-center">   <img src={Clara} className="w-10" alt="" /> <b>Clara</b> </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Inicio</Link>
          <Link to="/consultas-juridicas" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Consultas Jurídicas</Link>
          <Link to="/foros" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Foros</Link>
          <Link to="/recursos-legales" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Recursos legales</Link>
          <Link to="/chat" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>chat</Link>
          
        
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Menú móvil */}
      <div
        className={`
    md:hidden px-4 pb-4 flex flex-col gap-3 pt-5 space-y-2
    bg-white
    rounded-l-3xl
    transition-all duration-300
    absolute w-3/6 right-0 top-16 z-20
    transform
    ${open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
  `}
      >
        <Link to="/" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Inicio</Link>
        <Link to="/consultas-juridicas" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Consultas Jurídicas</Link>
        <Link to="/foros" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Foros</Link>
        <Link to="/recursos-legales" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>Recursos legales</Link>
         <Link to="/chat" className="hover:text-amber-300 transition" onClick={() => setOpen(!open)}>chat</Link>
      </div>
    </nav>
  );
};

export default Navbar;