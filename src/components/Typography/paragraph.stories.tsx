import { Meta, StoryObj } from '@storybook/react'

import { ParagraphText } from './paragraph'

const DefaultExport: Meta<typeof ParagraphText> = {
  title: "Typography/Paragraph",
  component: ParagraphText,
}

const mockedText = 'cursus neque ante enim vel placerat velit velit nunc. Duis gravida diam sem non sem facilisi diam. At nunc condimentum mauris nunc aliquet in id. Mattis faucibus semper leo consectetur magna ultrices. Eu dictum rutrum iaculis tortor lorem tellus dignissim lorem sit. Neque vitae senectus est scelerisque. Ipsum iaculis faucibus auctor arcu viverra ultricies sed varius. Et faucibus faucibus massa ut lorem auctor lacinia. Tincidunt mauris urna morbi accumsan aliquet amet. Commodo eu malesuada nulla consequat sit. Mi sagittis mattis eget sit et integer felis fermentum. Id nisi cum ut tincidunt varius. Blandit eu nec semper pellentesque sed sollicitudin ipsum convallis ut. Ullamcorper ornare dolor eget elementum nunc pharetra arcu vitae. Morbi nisl ornare quisque id. Nulla nibh sed felis porta. Elementum pharetra proin facilisis tellus. Turpis neque cum orci eu tristique purus euismod et nunc. Pulvinar aenean lacinia tincidunt est. Diam fames ut nibh quam. Sit ante ut lectus sit magna quisque vulputate. Congue pulvinar egestas egestas lorem sed leo sem. Tellus elementum eget malesuada non dolor rutrum lacus morbi. Neque tincidunt sit cras sed. Euismod mi feugiat vel ut aenean. Sed diam elit ac feugiat hac ultrices. Cum odio elementum massa eu nunc diam dolor gravida non. Facilisi gravida leo tellus molestie sed tortor. Nisl elit turpis at ut nisl vitae dolor. Et molestie venenatis non scelerisque eget sem lacus.'

type Story = StoryObj<typeof ParagraphText>;
export const Primary: Story = {
  render: (args) => <ParagraphText {...args}> {mockedText} </ParagraphText>,
  argTypes: {
    bold: {
      control: 'boolean',
      defaultValue: false
    },
    type: {
      options: ['span', 'p'],
      control: 'inline-radio',
      defaultValue: 'p'
    },
    mobile: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

export default DefaultExport