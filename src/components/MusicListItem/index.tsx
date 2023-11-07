"use cleint";

import React, { FC } from 'react'
import { Wrapper, ListActionsDiv, ListTitle, Divider } from './style'
import { faPlay, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type MusicListItemProps = {
  title: string,
  link: string,
}

export const MusicListItem: FC<MusicListItemProps> = ({ title, link  }) => {

  return (
    <Wrapper>
      <ListTitle> { title } </ListTitle>
      <ListActionsDiv >
        <FontAwesomeIcon color='#0593DD' size={'2x'} icon={faPlay} />
        <Divider />
        <a href={`${link}`} >
          <FontAwesomeIcon color='white' size={'2x'} icon={faClipboardList} />
        </a>
      </ListActionsDiv>
    </Wrapper>
  )
}