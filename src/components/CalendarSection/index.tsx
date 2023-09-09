"use client";
import React, { FC } from 'react'

import { SectionWrapper } from './style'
import { CalendarChip, CalendarInterface } from '../CalendarChip'

interface ICalendarSection {
  events: CalendarInterface[]
}


export const CalendarSection: FC<ICalendarSection> = ({ events }) => {

  return (
    <SectionWrapper>
      { 
        events.map(event => (
          <CalendarChip {...event} />
        ))
      }
    </SectionWrapper>
  )
}
