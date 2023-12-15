import React, { FC } from 'react'
import { Dialog, Divider, ListItem, ListWrapper } from './style'
import { HeaderText } from '../../components/Typography/headerText'
import { ParagraphText } from '../../components/Typography/paragraph'

export type Artist = {
  nome: string,
  papeis: string[]
}

export type MusicModalProps = {
  open: boolean,
  fichaTecnica?: Artist[],
  handleCloseDialog: () => void,
}

export const MusicModal: FC<MusicModalProps> = ({ fichaTecnica, open, handleCloseDialog }) => {
  
  return (
    <Dialog open={open} onBlur={handleCloseDialog} >
      <HeaderText style={{ marginBottom: "32px" }} type="h3" > Ficha Técnica </HeaderText>
      <ListWrapper>
        {
          fichaTecnica?.map((artist, index) => (
            <ListItem key={index}>
              <ParagraphText> {artist.nome} </ParagraphText>
              <div>
                <Divider />
              </div>
              <ParagraphText> {artist.papeis.join(', ')} </ParagraphText>
            </ListItem>
          ))
        }
      </ListWrapper>
    </Dialog>
  )
}