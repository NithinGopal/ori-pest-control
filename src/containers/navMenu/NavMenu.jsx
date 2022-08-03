import React from 'react'
import { Link } from 'react-router-dom';

import './navMenu.styles.css'

const NavMenu = () => {
  return (
    <>
      <Link to='/termite-control'>
        <p>Termite Control</p>
      </Link>
      <Link to='/pest-control'>
        <p>Pest Control</p>
      </Link>
      <Link to='/blog'>
        <p>Blog</p>
      </Link>
    </>
  )
}

export default NavMenu