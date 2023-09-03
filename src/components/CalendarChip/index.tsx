import React, { FC } from 'react'

import { CalendarWrapper, Divider, CalendarLink } from './style'
import { ParagraphText } from '../Typography/paragraph'
import { HeaderText } from '../Typography/headerText'

export interface CalendarInterface {
  date: string,
  eventName: string,
  location: string,
  link: string | null
}

export const CalendarChip: FC<CalendarInterface> = ({ date, eventName, location, link }) => {

  const data = new Date(date)
  const formater = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short' })
  const dateParts = formater.format(data).split(' ')

  const [day, month] = dateParts.slice(0,1).concat(dateParts.slice(2))

  return (
    <CalendarWrapper>
      <HeaderText type='h2' > { day } </HeaderText>
      <HeaderText type='h2' > { month } </HeaderText>
      <Divider />
      <ParagraphText> { eventName } </ParagraphText>
      <ParagraphText> { location } </ParagraphText>
      {
        link ? 
          <CalendarLink href={link} target='_blank' referrerPolicy='no-referrer' >
            Link pro sympla 
          </CalendarLink> 
        : 
        ''
      }
    </CalendarWrapper>
  )
}