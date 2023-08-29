import React, { FC } from 'react'

import { AboutSection } from './style'
import { HeaderText } from '../Typography/headerText'
import { ParagraphText } from '../Typography/paragraph'

interface AboutSection { 
  text: string
}

export const About: FC<AboutSection> = ({ text }) => {


  return (
    <AboutSection>
      <HeaderText bold mobile={false} type='h1' > Angela Velloso </HeaderText>
      <ParagraphText bold={false} mobile={false} type='p' > { text } </ParagraphText>
    </AboutSection>
  )
}

export default About