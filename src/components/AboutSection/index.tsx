"use client"
import React, { FC, useState } from 'react'

import { AboutSection, TextWrapper, ButtonDiv } from './style'
import { HeaderText } from '../Typography/headerText'
import { ParagraphText } from '../Typography/paragraph'
import MediaSection from '../MediaSection'

import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface AboutSection { 
  text: string
}

export const About: FC<AboutSection> = ({ text }) => {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded((prevState) => !prevState)

  return (
    <AboutSection id="sobre" >
      <HeaderText bold type='h1' > Angela Velloso </HeaderText>
      <TextWrapper>
        <ParagraphText className={expanded ? 'open' : 'close'} bold={false} type='p' > { text } </ParagraphText>
      </TextWrapper>
      <MediaSection className='media' />
      <ButtonDiv onClick={toggleExpanded} >
        {
          expanded ? 
            <FontAwesomeIcon size={'2x'} icon={faArrowUp} /> :
            <FontAwesomeIcon icon={faArrowDown} />
        }
      </ButtonDiv>
    </AboutSection>
  )
}

export default About