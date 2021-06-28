const variantNav = {
  hidden: {
    opacity: 0,
    y: '-100vh'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', duration: 0.5 }
  },
  exit: {
    opacity: 0,
    transition: { type: 'spring' }
  }
}

export default variantNav
