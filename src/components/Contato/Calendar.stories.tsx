import { Meta, StoryObj } from '@storybook/react'
import { Contato, IContato } from './'

type TypeofContato = typeof Contato

const CalendarStory: Meta<TypeofContato> = {
  title: "Components/Contato",
  component: Contato
}

type Story = StoryObj<TypeofContato>

export default CalendarStory

export const mockedArgs = {
  name: "Duarte Velloso",
  description: 'Responsabilidade desse contato',
  whatsapp: '71987654321',
  instagram: '@duarteVelloso'
} as IContato

export const defaultStory: Story = {
  render: (args) => <Contato {...args} />,
  args: mockedArgs
}