import React from 'react'
import { Menu } from '../../../styles/Menu.styled'

const MenuComponent = ({menuOpen, setMenuOpen}) => {
  if (menuOpen === true) return (
    <Menu>MenuComponent</Menu>
  )
}

export default MenuComponent