import { Meta, StoryObj } from '@storybook/react'
import { mockedArgs } from '../Contato/Calendar.stories'

import { ContatoSection } from '.'

type typeofContatoSection  = typeof ContatoSection

const ContatoSectionStory: Meta<typeofContatoSection> = {
  title: "Section/ContatoSection",
  component: ContatoSection
}

type Story = StoryObj<typeofContatoSection>

export default ContatoSectionStory

export const defaultStory: Story = {
  render: (args) => <ContatoSection {...args} />,
  args: {
    contatos: [mockedArgs, mockedArgs]
  }
}