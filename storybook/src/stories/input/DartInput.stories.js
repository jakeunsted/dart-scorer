import DartInput from '../../components/input/DartInput.vue';

export default {
  title: 'Input/DartInput',
  component: DartInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'The value of the input'
    },
  }
};

export const Standard = {
  args: {
    value: 0,
  }
}
