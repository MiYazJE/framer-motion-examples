import { useCycle, motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import variantResponsiveNav from 'variants/variantResponsiveNav'
import Toggle from 'components/Toggle/Toggle'
import { navItems } from './Nav'
import { Link } from 'react-router-dom'

const variantItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const MenuItem = ({ text, route }) => {
  return (
    <motion.li
      variants={variantItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={route}>{text.toUpperCase()}</Link>
    </motion.li>
  )
}

const variantNavigation = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const Navigation = () => (
  <motion.ul className="nav-list-responsive" variants={variantNavigation}>
    {navItems.map(({ text, route }) => (
      <MenuItem text={text} route={route} key={route} />
    ))}
  </motion.ul>
)

const ResponsiveNav = ({ height }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
    >
      <motion.div className="background" variants={variantResponsiveNav} />
      <Navigation />
      <Toggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default ResponsiveNav
