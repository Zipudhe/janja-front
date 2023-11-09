import React, { FC } from "react"

import { HeaderText } from "../../components/Typography/headerText"
import { Divider } from '../../components/CalendarChip/style'
import { MusicItem, MusicListItem } from '../../components/MusicListItem'

import { Wrapper, TitleContainer, MusicListContainer } from './style'


type DiscographyPageProps = {
  discography: MusicItem[]
}

export const DiscographyPage:FC<DiscographyPageProps> = ({ discography }) => {
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
                <MusicListItem key={index} music={music} />
              ))
            }
          </MusicListContainer>
        </Wrapper>
      </main>
    </>
  )
}