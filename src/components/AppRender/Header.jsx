import { Link } from 'react-router-dom'
import '../../style/styles.scss'
import { useState } from 'react';

function Header() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="w-screen h-[64px] flex flex-col bg-project-700">
      <div className='md:hidden h-[64px] flex justify-end items-center p-4'>
        <i 
          onClick={() => {setIsVisible(!isVisible)}} 
          className="bi bi-list text-4xl text-project-50 hover:text-acento duration-300"
        ></i>
      </div>
      <nav 
        className={`border-t-[1px] border-project-400 w-screen absolute ${isVisible ? "top-[64px]" : "-top-[300px]"} md:top-0 h-64 md:h-[64px] flex flex-col md:flex-row justify-start items-center p-4 gap-6 4xl text-white bg-project-700`}
      >
        <Link 
          to="/" 
          className='text-project-400 text-xl'
        >
          Corporacion Capital
        </Link>
        {/* <Link 
          to="/nosotros" 
          className='text-project-50 duration-300 hover:text-acento'
        >
          Nosotros
        </Link> */}
        <Link 
          to="/empleos" 
          className='text-project-50 duration-300 hover:text-acento'
        >
          Empleos
        </Link>
        {/* <Link 
          to="/comunidad" 
          className='text-project-50 duration-300 hover:text-acento'
        >
          Comunidad
        </Link> */}
        <Link 
          to="/empleador" 
          className='text-project-50 duration-300 hover:text-acento md:hidden'>Soluciones al Empleador</Link>
        {/* <div className='hidden md:flex md:ml-auto lg:pr-10'>
          <Link 
            to="" 
            className='text-project-50 duration-300 hover:text-acento'
          >
            Soluciones al Empleador
          </Link>
        </div> */}
      </nav>
    </header>
  )
}
export default Header