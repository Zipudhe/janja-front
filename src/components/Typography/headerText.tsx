import React, { FC } from "react";
import { Header1, Header2, Header3, IText } from './style'

interface IHeaderText extends IText {
  type: 'h1' | 'h2' | 'h3',
  children: React.ReactNode
}

export const HeaderText: FC<IHeaderText> = ({bold = false, mobile = false, type = 'h1', children }) => {

  if(type == 'h1') {
    return <Header1 bold={bold} mobile={mobile}> { children } </Header1>
  }
  else if(type == 'h2') {
    return <Header2 bold={bold} mobile={mobile}> { children } </Header2>
  }
  
  return <Header3 bold={bold} mobile={mobile} > { children } </Header3>
}