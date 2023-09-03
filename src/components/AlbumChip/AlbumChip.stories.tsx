import  { Meta, StoryObj } from '@storybook/react'

import { AlbumChip } from './'

const DefaultExport: Meta<typeof AlbumChip> = {
  title: "Components/AlbumChip",
  component: AlbumChip
}

type Story = StoryObj<typeof AlbumChip>;

const mockedImage = 'https://images.unsplash.com/photo-1686781034536-2e762580114a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
const mockedName = 'Um nome de album relativamente longo pra testar como fica'


export const Default: Story = {
  render: (args) => <AlbumChip {...args} />,
  args: {
    img: mockedImage,
    name: mockedName
  }
}

export default DefaultExport