import { Meta, StoryObj } from '@storybook/react'

import { CalendarChip } from './'

const StoryComponent: Meta<typeof CalendarChip> = {
  title: 'Components/CalendarChip',
  component: CalendarChip
}

export default StoryComponent

type Story = StoryObj<typeof CalendarChip>

export const defaultStory: Story  = {
  render: (args) => <CalendarChip {...args} />,
  args: {
    date: '2023-08-11',
    eventName: 'Show Outras vozes',
    location: 'Casa Rosa',
    link: 'https://google.com.br'
  }
}