import React, { FC } from 'react'

import { AlbunsWrapper } from './style'

import { AlbumChip } from '../AlbumChip'

type Album = {
  name: string,
  img: string
}

interface IAlbumSection {
  albuns: Album[]
}

export const AlbumSection: FC<IAlbumSection> = ({ albuns }) => (
  <AlbunsWrapper>
    {
      albuns.map(album => (
        <AlbumChip {...album} />
      ))
    }
  </AlbunsWrapper>
)
