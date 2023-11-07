
"use client";
import React, { FC } from 'react'

import Navigation from '../NavigationMenu'

import { CoverImage, HeaderWrapper } from './style'

export interface IHeader {
  showCover?: boolean
}

export const Header:FC<IHeader> = ({ showCover = true }) => {

  return (
    <HeaderWrapper showCover={showCover} >
      <Navigation />
      { showCover && <CoverImage src={"https://images.unsplash.com/photo-1692060234392-aa41b4703065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"} /> }
    </HeaderWrapper>
  )
}

export default Header