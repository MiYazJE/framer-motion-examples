import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import variantNav from 'variants/variantNav'
import ResponsiveNav from './ResponsiveNav'

export const navItems = [
  {
    route: '/page1',
    text: 'page1'
  },
  {
    route: '/page2',
    text: 'Users'
  },
  {
    route: '/page3',
    text: 'page3'
  }
]

const WIDTH_BREAKPOINT_NAV = 700

const Nav = ({ width, height }) => {
  const [showNavIcon, setShowNavIcon] = useState(false)

  useEffect(() => {
    setShowNavIcon(width < WIDTH_BREAKPOINT_NAV)
  }, [width])

  return (
    <>
      <header>
        <AnimatePresence>
          {!showNavIcon && (
            <motion.ul
              variants={variantNav}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="nav-list"
              position="relative"
            >
              {navItems.map(({ route, text }) => (
                <li key={route}>
                  <Link to={route}>{text.toUpperCase()}</Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
      {showNavIcon && <ResponsiveNav height={height} />}
    </>
  )
}

export default Nav
