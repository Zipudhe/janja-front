import React, { FC, useState } from 'react'

import menuIcon from '../../../public/assets/icons8-hamburger-menu-50.svg'
import { Wrapper, DropDownMenu } from './style'
import { Link } from '../Header/style'

export const HamburgerMenu: FC = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(prevState => !prevState)

  return (
    <Wrapper onClick={toggleMenu} >
      <img {...menuIcon} alt="menu icon" />
      <DropDownMenu className={isOpen ? 'open' : 'close'} >
        <Link> Sobre </Link>
        <Link> Discografia </Link>
        <Link> Shows </Link>
        <Link> Projetos </Link>
        <Link> Fotos e Videos </Link>
        <Link> Contato </Link>
      </DropDownMenu>
    </Wrapper>
  )
}

export default HamburgerMenu