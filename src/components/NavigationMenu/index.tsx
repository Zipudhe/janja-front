"use client";
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
          <Link href="#sobre" > Sobre </Link>
          <Link> Discografia </Link>
          <Link href="#shows" > Shows </Link>
          <Link> Projetos </Link>
          <Link> Fotos e Videos </Link>
          <Link href="#contato" > Contato </Link>
        </LinkWrapper>
        :
        <HamburgerMenu />
      }
  </NavigationWrapper>
  )
}

export default Navigation