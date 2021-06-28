import React, { useEffect, useState } from 'react'
import AnimateContainer from 'components/AnimateContainer/AnimateContainer'
import { motion } from 'framer-motion'

const API_URL = 'https://reqres.in/api/users?page=1'

const variantUserBox = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const variantContainerUsers = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 1 }
  },
  closed: { staggerChildren: 0.1, staggerDirection: -1 }
}

const Page2 = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => {
        setLoading(false)
        setUsers(users.data)
      })
  }, [])

  if (loading) return null

  return (
    <AnimateContainer>
      {users.length && (
        <motion.div
          variants={variantContainerUsers}
          initial="closed"
          animate="open"
          className="users-wrap"
        >
          {users.map((user) => (
            <motion.div
              variants={variantUserBox}
              key={user.id}
              className="user-box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={user.avatar} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimateContainer>
  )
}

export default Page2
