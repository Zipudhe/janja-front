import { Meta, StoryObj } from '@storybook/react'

import MediaSection from '.'

const DefaultExport: Meta<typeof MediaSection> = {
  title: "Components/MediaSection",
  component: MediaSection
}

type Story =  StoryObj<typeof MediaSection>;

export const Primary: Story = {
  render: (args) => <MediaSection {...args} />
}

export default DefaultExport