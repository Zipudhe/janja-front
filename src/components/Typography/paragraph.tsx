import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";
import { Paragraph, Span, IText } from './style'

type MyTextElement = HtmlHTMLAttributes<HTMLParagraphElement | HTMLSpanElement>

type IParagrah = MyTextElement & { type?: 'span' | 'p', children: ReactNode, bold?: boolean };

export const ParagraphText: FC<IParagrah> = ({bold = false, type = 'p', children, ...props }) => {

  if(type == 'p') {
    return <Paragraph {...props} bold={bold}> { children } </Paragraph>
  }
  
  return <Span {...props} bold={bold} > { children } </Span>
}