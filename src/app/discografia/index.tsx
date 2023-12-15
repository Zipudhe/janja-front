import React, { FC, useState } from "react"

import { HeaderText } from "../../components/Typography/headerText"
import { Divider } from '../../components/CalendarChip/style'
import { MusicItem, MusicListItem } from '../../components/MusicListItem'
import { MusicModal } from "../../components/MusicModal"

import { Wrapper, TitleContainer, MusicListContainer } from './style'


type DiscographyPageProps = {
  discography: MusicItem[]
}

export const DiscographyPage:FC<DiscographyPageProps> = ({ discography }) => {
  
  const [selectedMusic, setSelectedMusic] = useState<number | null>(null);
  const [open, setOpen] = useState(false)
  // adicionar array de ficha tecnica por música ordenado de acordo com o array de músicas
    
  const handleOpenDialog = (index: number) => {
    setSelectedMusic(index)
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setSelectedMusic(null)
    setOpen(false)
  }

  return (
    <>
      <main>
        <Wrapper>
          <TitleContainer>
            <HeaderText style={{ textAlign: 'center' }} > Discografia </HeaderText>
            <Divider />
          </TitleContainer>
          <MusicListContainer>
            {
              discography.map((music, index) => (
                <MusicListItem 
                  key={index} 
                  music={music}
                  handleOpenDialog={( ) => handleOpenDialog(index)}
                />
              ))
            }
          </MusicListContainer>
        </Wrapper>
        <MusicModal open={open} handleCloseDialog={handleCloseDialog}  />
      </main>
    </>
  )
}