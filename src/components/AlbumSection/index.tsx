"use client";

import React, { FC } from 'react'

import { AlbunsWrapper } from './style'

import { AlbumChip } from '../AlbumChip'

export type Album = {
  name: string,
  img: string
}

export interface IAlbumSection {
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
