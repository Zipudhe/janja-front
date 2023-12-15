import { Meta, StoryObj } from '@storybook/react'
import { MusicListItem } from './'

export type MusicListStoryProp = typeof MusicListItem

const storyComponent: Meta<MusicListStoryProp> = {
  title: "Components/MusicListItem",
  component: MusicListItem,
  parameters: {
    layout: "fullscreen"
  }
}

export default storyComponent

type Story = StoryObj<MusicListStoryProp>

export const mockedMusic = {
  id: 2,
  title: "Música 1",
  link: "https://www.youtube.com/watch?v=5qap5aO4i9A"
}

export const defaultStory: Story = {
  render: (args) => <MusicListItem {...args} />,
  args: {
    music: mockedMusic,
    key: 12,
  }
}