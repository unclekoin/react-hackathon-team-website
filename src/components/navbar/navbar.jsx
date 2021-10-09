import React, { useState } from 'react'
import NavBarTop from './NavBarTop'
import NavBarBottom from './NavBarBottom'

const Navbar = () => {
  const [collapse, setCollapse] = useState(true)

  const toggleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <header>
      <NavBarTop collapse={collapse}></NavBarTop>{' '}
      <NavBarBottom toggleCollapse={toggleCollapse}></NavBarBottom>{' '}
    </header>
  )
}

export default Navbar
