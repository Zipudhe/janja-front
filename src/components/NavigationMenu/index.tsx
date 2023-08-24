import React from "react";

import { NavigationWrapper, Link, IconDiv, LinkWrapper } from './style'
import HamburgerMenu from '../HamburgerMenu'

import useMobile from "../../hooks/useMobile";

export const Navigation = () => {

  const mobile = useMobile()  

  return (  
    <NavigationWrapper>
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
  </NavigationWrapper>
  )
}

export default Navigation