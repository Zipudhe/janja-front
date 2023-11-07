import { Meta, StoryObj } from '@storybook/react'
import { DiscographyPage } from './index'

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

export const defaultStory: Story = {
  render: () => <DiscographyPage />
}