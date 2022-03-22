import Heading from './Heading'

export default {
  title: 'Website/Components/Typography/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
    typeStyle: 'heading-xl',
    children: 'Heading Extra Large',
    level: 'h2',
    textColor: 'text-gray-900'
}