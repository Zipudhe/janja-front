import React, { FC, useState } from 'react'

import { AboutSection, TextWrapper, ButtonDiv } from './style'
import { HeaderText } from '../Typography/headerText'
import { ParagraphText } from '../Typography/paragraph'

import ArrowIcon from '../../assets/chevron-down-solid.svg'

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
      <ButtonDiv onClick={toggleExpanded} >
        <img {...ArrowIcon} alt="icon" className={expanded ? 'up' : 'down'} />
      </ButtonDiv>
    </AboutSection>
  )
}

export default About