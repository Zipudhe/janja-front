import React from "react";

import { HeaderWrapper, Link, IconDiv, LinkWrapper } from './style'
import HamburgerMenu from '../HamburgerMenu'

import useMobile from "../../hooks/useMobile";

export const Header = () => {

  const mobile = useMobile()

  return (
    <HeaderWrapper>
      <IconDiv>  </IconDiv>
      {
        !mobile ? 
        <LinkWrapper>
          <Link> Sobre </Link>
          <Link> Discografia </Link>
          <Link> Shows </Link>
          <Link> Projetos </Link>
          <Link> Fotos e Videos </Link>
          <Link> Contato </Link>
        </LinkWrapper>
        :
        <HamburgerMenu />
      }
      
  </HeaderWrapper>
  )
}

export default Header