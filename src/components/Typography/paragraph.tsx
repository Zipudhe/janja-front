import React, { FC } from "react";
import { Paragraph, Span, IText } from './style'


interface IParagrah extends IText {
  type: 'span' | 'p',
  children: React.ReactNode
}

export const ParagraphText: FC<IParagrah> = ({bold = false, mobile = false, type = 'p', children }) => {

  if(type == 'p') {
    return <Paragraph bold={bold} mobile={mobile}> { children } </Paragraph>
  }
  
  return <Span bold={bold} mobile={mobile} > { children } </Span>
}