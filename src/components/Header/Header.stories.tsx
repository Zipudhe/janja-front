import { Meta, StoryObj } from '@storybook/react'

import Header from ".";

const HeaderStory: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
}

const mockedImage = 'https://images.unsplash.com/photo-1692060234392-aa41b4703065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'

type Story = StoryObj<typeof Header>

export const Desktop: Story =  {
  render: () => <Header imageSrc={mockedImage} />
}

export default HeaderStory