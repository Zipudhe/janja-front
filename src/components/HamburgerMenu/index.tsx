"use client"
import React, { FC, useState } from 'react'

import menuIcon from '../../assets/icons8-hamburger-menu-50.svg'
import { Wrapper, DropDownMenu, DropDownLink } from './style'

export const HamburgerMenu: FC = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(prevState => !prevState)

  return (
    <Wrapper onClick={toggleMenu} >
      <img {...menuIcon} alt="menu icon" />
      <DropDownMenu className={isOpen ? 'open' : ''} >
        <DropDownLink href='#sobre' > Sobre </DropDownLink>
        <DropDownLink> Discografia </DropDownLink>
        <DropDownLink href='#shows' > Shows </DropDownLink>
        <DropDownLink> Projetos </DropDownLink>
        <DropDownLink> Fotos e Videos </DropDownLink>
        <DropDownLink href="contato" > Contato </DropDownLink>
      </DropDownMenu>
    </Wrapper>
  )
}

export default HamburgerMenu