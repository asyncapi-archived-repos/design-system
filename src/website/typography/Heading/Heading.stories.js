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

export const Large = Template.bind({})
Large.args = {
    typeStyle: 'heading-lg',
    children: 'Heading Large',
    level: 'h2',
    textColor: 'text-gray-900'
}

export const MediumBold = Template.bind({})
MediumBold.args = {
    typeStyle: 'heading-md',
    children: 'Heading Medium Bold',
    level: 'h2',
    textColor: 'text-gray-900'
}

export const MediumSemiBold = Template.bind({})
MediumSemiBold.args = {
    typeStyle: 'heading-md-semibold',
    children: 'Heading Medium Semi-Bold',
    level: 'h2',
    textColor: 'text-gray-900'
}

export const SmallBold = Template.bind({})
SmallBold.args = {
    typeStyle: 'heading-sm',
    children: 'Heading Small Bold',
    level: 'h2',
    textColor: 'text-gray-900'
}

export const SmallSemiBold = Template.bind({})
SmallSemiBold.args = {
    typeStyle: 'heading-sm-semibold',
    children: 'Heading Small Semi-Bold',
    level: 'h2',
    textColor: 'text-gray-900'
}

export const ExtraSmallBold = Template.bind({})
ExtraSmallBold.args = {
    typeStyle: 'heading-xs',
    children: 'Heading Extra Small Bold',
    level: 'h2',
    textColor: 'text-gray-900'
}

export const ExtraSmallSemiBold = Template.bind({})
ExtraSmallSemiBold.args = {
    typeStyle: 'heading-xs-semibold',
    children: 'Heading Extra Small Semi-Bold',
    level: 'h2',
    textColor: 'text-gray-900'
}