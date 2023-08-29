import React, { FC, useState } from 'react'

import { AboutSection, TextWrapper } from './style'
import { HeaderText } from '../Typography/headerText'
import { ParagraphText } from '../Typography/paragraph'

interface AboutSection { 
  text: string
}

export const About: FC<AboutSection> = ({ text }) => {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded((prevState) => !prevState)

  return (
    <AboutSection>
      <HeaderText bold type='h1' > Angela Velloso </HeaderText>
      <TextWrapper>
        <ParagraphText className={expanded ? 'open' : 'close'} bold={false} type='p' > { text } </ParagraphText>
      </TextWrapper>
      <button onClick={toggleExpanded} > Expandir </button>
    </AboutSection>
  )
}

export default About