import  React, { FC } from 'react'

import { ContatoWrapper, Info, ContactInfo } from './style'
import { ParagraphText } from '../Typography/paragraph'
import { HeaderText } from '../Typography/headerText'

import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface IContato {
  name: string,
  description: string,
  whatsapp: string,
  instagram: string
}

export const Contato: FC<IContato> = ({ name, description, instagram, whatsapp }) => (
  <ContatoWrapper>
    <HeaderText type='h2' > { name } </HeaderText>
    <ParagraphText> { description } </ParagraphText>
    <Info>
      <ContactInfo>
        <FontAwesomeIcon color="#0593DD" size="3x" icon={faWhatsapp} />
        <HeaderText type="h3"> { whatsapp } </HeaderText>
      </ContactInfo>
      <ContactInfo>
        <FontAwesomeIcon color="#0593DD" size="3x" icon={faInstagram} />
        <HeaderText type="h3"> { instagram } </HeaderText>
      </ContactInfo>
    </Info>
  </ContatoWrapper>
)