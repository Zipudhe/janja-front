import { Meta, StoryObj } from '@storybook/react'
import { DiscographyPage } from './index'

import { mockedMusic } from '../../components/MusicListItem/MusicLits.stories'

type typeofDiscographyPage = typeof DiscographyPage

const storyComponent: Meta<typeofDiscographyPage> = {
  title: "Pages/Discografia",
  component: DiscographyPage,
  parameters: {
    layout: "fullscreen"
  }
}

export default storyComponent

type Story = StoryObj<typeofDiscographyPage>

const discography = [mockedMusic, mockedMusic, mockedMusic]

export const defaultStory: Story = {
  render: (args) => <DiscographyPage {...args} />,
  args: {
    discography
  }
}