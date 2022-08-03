import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import NavMenu from '../../containers/navMenu/NavMenu'

import logo from '../../assets/logo.png'
import './navbar.styles.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className='ori__navbar'>
        <div className='ori__navbar-links'>
          <Link to='/'>
            <div className='ori__navbar-links_logo'>
              <img src={logo} alt='logo' />
              <p>Ori Pest Cop</p>
            </div>
          </Link>
        </div>
        <div className='ori__navbar-links_container'>
          <NavMenu />
        </div>
        <div className='ori__navbar-contact'>
          <a href="tel:+"><p>+91-9518947137</p></a>
          <button type='button'>Chat</button>
        </div>
        <div className='ori__navbar-menu'>
          {toggleMenu 
            ? <RiCloseLine color='#042a50' size={27} onClick={() => setToggleMenu(false)} /> 
            : <RiMenu3Line color='#042a50' size={27} onClick={() => setToggleMenu(true)} />
          }

          {toggleMenu && (
            <div className='ori__navbar-menu_container scale-up-center'>
              <div className='ori__navbar-menu_container-links'>
                <NavMenu />
                <div className='ori__navbar-menu_container-links-contact'>
                  <a href="tel:+"><p>+91-9518947137</p></a>
                  <button type='button'>Chat</button>
                </div>
              </div>
            </div>
          )
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar