import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";
import { Header1, Header2, Header3, IText } from './style'

type MyTextElement = HtmlHTMLAttributes<HTMLParagraphElement | HTMLSpanElement>

type IHeaderText = MyTextElement & { type?: 'h1' | 'h2' | 'h3', children: ReactNode, bold?: boolean };


export const HeaderText: FC<IHeaderText> = ({bold = false, type = 'h1', children }) => {

  if(type == 'h1') {
    return <Header1 bold={bold} > { children } </Header1>
  }
  else if(type == 'h2') {
    return <Header2 bold={bold} > { children } </Header2>
  }
  
  return <Header3 bold={bold}  > { children } </Header3>
}