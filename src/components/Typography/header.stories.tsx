import { Meta, StoryObj } from '@storybook/react'

import { HeaderText } from './headerText'

const DefaultExport: Meta<typeof HeaderText> = {
  title: "Typography/Header",
  component: HeaderText,
}


type Story = StoryObj<typeof HeaderText>;
export const Primary: Story = {
  render: (args) => <HeaderText {...args}> Texto de exemplo </HeaderText>,
  argTypes: {
    bold: {
      control: 'boolean',
      defaultValue: false
    },
    type: {
      options: ['h1', 'h2', 'h3'],
      control: 'inline-radio',
      defaultValue: 'h1'
    },
    mobile: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

export default DefaultExport