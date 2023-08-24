import { Meta, StoryObj } from '@storybook/react'

import Navigation from ".";

const NavigationStory: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen'
  }
}

type Story = StoryObj<typeof Navigation>

export const Desktop: Story= {
  render: () => <Navigation  />
}


export default NavigationStory