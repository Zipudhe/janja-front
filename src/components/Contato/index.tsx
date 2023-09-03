import  React, { FC } from 'react'

import { ContatoWrapper, Info, ContactInfo } from './style'
import { ParagraphText } from '../Typography/paragraph'
import { HeaderText } from '../Typography/headerText'

import InstagramIcon from '../../assets/icons8-instagram.svg'
import WhatsAppIcon from '../../assets/icons8-whatsapp.svg'

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
        <img {...WhatsAppIcon} />
        <HeaderText type="h3"> { whatsapp } </HeaderText>
      </ContactInfo>
      <ContactInfo>
        <img {...InstagramIcon} />
        <HeaderText type="h3"> { instagram } </HeaderText>
      </ContactInfo>
    </Info>
  </ContatoWrapper>
)