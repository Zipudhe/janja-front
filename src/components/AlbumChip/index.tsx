import React, { FC } from "react";
import { AlbumCover, Wrapper } from './style'

import { ParagraphText } from '../Typography/paragraph'

interface IAlbumChip {
  name: string,
  img: string
}

export const AlbumChip: FC<IAlbumChip> = ({ name , img}) => (
    <Wrapper>
      <AlbumCover>
        <img src={img} />
      </AlbumCover>
      <ParagraphText bold > { name } </ParagraphText>
    </Wrapper>
  )
