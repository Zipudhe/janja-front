import React, { FC } from 'react'

import Navigation from '../NavigationMenu'

import { CoverImage, HeaderWrapper } from './style'

interface IHeader {
  imageSrc: string
}

export const Header:FC<IHeader> = ({ imageSrc }) => {

  return (
    <HeaderWrapper>
      <Navigation />
      <CoverImage src={imageSrc} />
    </HeaderWrapper>
  )
}

export default Header