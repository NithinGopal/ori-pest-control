import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import './navMenu.styles.css'

const navLinkVariants = {
  hover: {
    scale: 1.1,
  },
  click: {
    scale: 0.8,
  }
}

const NavMenu = () => {
  return (
    <>
      <Link to='/termite-control'>
        <motion.p variants={navLinkVariants} whileHover='hover' whileTap='click'>Termite Control</motion.p>
      </Link>
      <Link to='/pest-control'>
        <motion.p variants={navLinkVariants} whileHover='hover' whileTap='click'>Pest Control</motion.p>
      </Link>
      <Link to='/pest-library'>
        <motion.p variants={navLinkVariants} whileHover='hover' whileTap='click'>Pest Library</motion.p>
      </Link>
    </>
  )
}

export default NavMenu