import ScoreInput from '../../components/input/ScoreInput.vue';

export default {
  title: 'Input/ScoreInput',
  component: ScoreInput,
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