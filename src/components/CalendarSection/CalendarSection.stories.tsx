import { Meta, StoryObj } from '@storybook/react'
import { CalendarSection } from './'

import { CalendarInterface } from '../CalendarChip'

type CalendarType = typeof CalendarSection

const CalendarStory: Meta<CalendarType> = {
  title: 'Section/CalendarSection',
  component: CalendarSection
}

export default CalendarStory

type Story = StoryObj<CalendarType>

const event = {
  date: '2023-08-23',
  eventName: 'Outras vozes',
  location: 'Casa Rosa',
  link: 'https://google.com.br'
} as CalendarInterface

const mockedEvents = [event, event, event, event]

export const defaulStory: Story = {
  render: (args) => <CalendarSection {...args} />,
  args: {
    events: mockedEvents,
  }
}

