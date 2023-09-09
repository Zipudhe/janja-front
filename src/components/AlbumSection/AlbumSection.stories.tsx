import { Meta, StoryObj } from '@storybook/react'

import { AlbumSection } from './'

type AlbumType = typeof AlbumSection

const defaultExport: Meta<AlbumType> = {
  title: 'Section/AlbumSection',
  component: AlbumSection
}

export default defaultExport

type Story =  StoryObj<AlbumType>

const album = {
  name: 'Água demais mata a planta',
  img: 'https://plus.unsplash.com/premium_photo-1666678904615-a4961ea4cef3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
}

export const mockedAlbuns = [album, album, album, album]

export const Default: Story = {
  render: (args) => <AlbumSection {...args} />,
  args: {
    albuns: mockedAlbuns
  }
}