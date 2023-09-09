"use client";
import  React, { FC } from 'react'

import { ContatoWrapper } from './style'

import { Contato, IContato } from '../Contato'

interface IContatoSection {
  contatos: IContato[]
}

export const ContatoSection: FC<IContatoSection> = ({ contatos }) => {
  const [contato1, contato2] = contatos

  return (
    <ContatoWrapper>
      <Contato {...contato1} />
      <hr />
      <Contato {...contato2} />
    </ContatoWrapper>
  )
}