import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { MdPhoneInTalk, MdLocationOn } from 'react-icons/md'
import NavMenu from '../../containers/navMenu/NavMenu'
import Footer from '../../containers/footer/Footer'

import logo from '../../assets/navicon-nobg.png'
import './navbar.styles.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className='ori__banner'>
        <div className='ori__banner-location'>
          <MdLocationOn size={20} />
          <p>NELLORE / VIJAYAWADA</p>
        </div>
        <div className='ori__banner-call'>
          <MdPhoneInTalk size={24} />
          <span><a href="tel:+919100094789">9100094789</a></span>
          <span><p> Or </p></span>
          <span><a href="tel:+919398808712">9398808712</a></span>
        </div>
      </div>
      <div className='ori__navbar'>
        <div className='ori__navbar-links'>
          <Link to='/'>
            <div className='ori__navbar-links_logo'>
              <img src={logo} alt='logo' />
              {/* <p>Ori Pest Cop</p> */}
            </div>
          </Link>
        </div>
        <div className='ori__navbar-links_container'>
          <NavMenu />
        </div>
        <div className='ori__navbar-contact'>
          {/* <a href="tel:+919100094789"><p><span><MdPhoneInTalk /></span>9100094789</p></a> */}
          {/* <button type='button'>Chat</button> */}
          <a href="tel:+919100094789"><button type='button'>Call Now</button></a>
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
                  <a href="tel:+919100094789"><p>9100094789</p></a>
                  {/* <button type='button'>Chat</button> */}
                </div>
              </div>
            </div>
          )
          }
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar