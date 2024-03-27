import ScoreCard from '../../components/score/ScoreCard.vue'

export default {
  title: 'Score/ScoreCard',
  component: ScoreCard,
  tags: ['autodocs'],
  argTypes: {
    username: {
      control: { type: 'text' },
      description: 'The username of the player'
    },
    average: {
      control: { type: 'number' },
      description: 'The average score of the player'
    },
    lastScore: {
      control: { type: 'number' },
      description: 'The last score of the player'
    },
    remainingScore: {
      control: { type: 'number' },
      description: 'The remaining score of the player'
    },
  }
};

export const Standard = {
  args: {
    username: 'Jake Unsted',
    average: 51.22,
    lastScore: 0,
    remainingScore: 501,
  }
}
