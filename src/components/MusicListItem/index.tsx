"use cleint";

import React, { FC } from 'react'
import { Wrapper, ListActionsDiv, ListTitle, Divider } from './style'
import { faPlay, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type MusicItem = {
  title: string,
  link: string,
  id: number
}

export type MusicListItemProps = {
  music: MusicItem
}

export const MusicListItem: FC<MusicListItemProps> = ({ music }) => {

  return (
    <Wrapper>
      <ListTitle> { music.title } </ListTitle>
      <ListActionsDiv >
        <FontAwesomeIcon color='white' size={'2x'} icon={faClipboardList} />
        <Divider />
        <a target="#" rel="noreferer noopener" href={`${music.link}`} >
          <FontAwesomeIcon color='#0593DD' size={'2x'} icon={faPlay} />
        </a>
      </ListActionsDiv>
    </Wrapper>
  )
}