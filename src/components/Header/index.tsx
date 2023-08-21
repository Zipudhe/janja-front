import React from "react";

import { HeaderWrapper, Link, IconDiv, LinkWrapper } from './style'

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
        <div id="mobile"> Mobile </div>
      }
      
  </HeaderWrapper>
  )
}

export default Header