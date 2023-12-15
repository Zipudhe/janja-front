"use cleint";

import React, { FC, HtmlHTMLAttributes } from 'react'
import { Wrapper, ListActionsDiv, ClipDiv, ListTitle, Divider } from './style'
import { faPlay, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type MusicItem = {
  title: string,
  link: string,
  id: number,
}

export type MusicListItemProps = HtmlHTMLAttributes<HTMLDivElement> & {
  music: MusicItem,
  handleOpenDialog: () => void,
  key: number
}

export const MusicListItem: FC<MusicListItemProps> = ({ music, key, handleOpenDialog }) => {

  return (
    <Wrapper key={key} >
      <ListTitle> { music.title } </ListTitle>
      <ListActionsDiv >
        <ClipDiv
          onClick={handleOpenDialog}
        >
          <FontAwesomeIcon color='white' size={'2x'} icon={faClipboardList} />
        </ClipDiv>
        <Divider />
        <a target="#" rel="noreferer noopener" href={`${music.link}`} >
          <FontAwesomeIcon color='#0593DD' size={'2x'} icon={faPlay} />
        </a>
      </ListActionsDiv>
    </Wrapper>
  )
}