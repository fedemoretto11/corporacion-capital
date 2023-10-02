import { Link } from 'react-router-dom'
import '../../style/styles.scss'
import { useState } from 'react';

function Header() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="header w-screen h-[64px] flex flex-col">
      <div className='header__burgerMenu md:hidden h-[64px] flex justify-end items-center p-4'>
        <i onClick={() => {setIsVisible(!isVisible)}} className="header__burgerMenu__icon bi bi-list text-4xl text-white"></i>
      </div>
      <nav className={`header__nav w-screen absolute ${isVisible ? "top-[64px]" : "-top-[300px]"} md:top-0 h-64 md:h-[64px] flex flex-col md:flex-row justify-start items-center p-4 gap-6 4xl text-white`}>
        <Link to="/" className='header__nav__title text-xl'>Corporacion Capital</Link>
        {/* <Link to="/nosotros" className='header__nav__link'>Nosotros</Link> */}
        <Link to="/empleos" className='header__nav__link'>Empleos</Link>
        {/* <Link to="/comunidad" className='header__nav__link'>Comunidad</Link> */}
        {/* <Link to="/empleador" className='header__nav__link md:hidden'>Soluciones al Empleador</Link> */}
        <div className='hidden md:flex md:ml-auto lg:pr-10'>
          {/* <Link to="" className='header__nav__link'>Soluciones al Empleador</Link> */}
        </div>
      </nav>
    </header>
  )
}
export default Header