import React from 'react'
import variantContainer from 'variants/variantContainer'
import { motion } from 'framer-motion'

const AnimateContainer = ({ children }) => {
  return (
    <motion.div
      variants={variantContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="content-container"
    >
      {children}
    </motion.div>
  )
}

export default AnimateContainer
