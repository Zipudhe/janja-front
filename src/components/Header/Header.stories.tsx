import { Meta, StoryObj } from '@storybook/react'

import Header from ".";

const HeaderStory: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
}

type Story = StoryObj<typeof Header>

export const Desktop: Story= {
  render: () => <Header  />
}


export default HeaderStory