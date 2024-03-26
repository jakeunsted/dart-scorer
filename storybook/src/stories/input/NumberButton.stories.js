import NumberButton from '../../components/input/NumberButton.vue';

export default {
  title: 'Input/NumberButton',
  component: NumberButton,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
    },
  },
};

export const Standard = {
  args: {}
}
