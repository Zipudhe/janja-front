import { Meta, StoryObj } from '@storybook/react'
import { MusicModal } from './'

export type MusicListStoryProp = typeof MusicModal

const storyComponent: Meta<MusicListStoryProp> = {
  title: "Components/MusicModal",
  component: MusicModal,
  parameters: {
    layout: "fullscreen"
  }
}

export default storyComponent

type Story = StoryObj<MusicListStoryProp>

const artist = { nome: "Fulano Di tal", papeis: ['Baterista', 'Tecladista', 'Vocalista', "Violonista", "Baixista"]  }
// const artists = [artist, artist, artist, artist, artist, artist]
const artists = [artist, artist]


export const defaultStory: Story = {
  render: (args) => <MusicModal {...args} />,
  args: {
    fichaTecnica: artists
  }
}