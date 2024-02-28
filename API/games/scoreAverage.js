// This will take the total score over x amount of throws.
// A 3 dart average will be collected during the entire session.
// Score will be stored against the user.
// A game object will be appended to the users games array.
class scoreAverage {
  constructor(maxThrows) {
      this.maxThrows = maxThrows;
      this.throws = [];
  }

  throwDarts(score1, score2, score3) {
      if (this.throws.length < this.maxThrows) {
          this.throws.push([score1, score2, score3]);
          console.log(`Darts thrown: ${this.throws.length}/${this.maxThrows}`);
      } else {
          console.log('Game over. All throws used.');
      }
  }

  calculateAverage() {
      let totalScore = 0;
      this.throws.forEach((throwSet) => {
          totalScore += throwSet.reduce((acc, score) => acc + score, 0);
      });
      return totalScore / (this.throws.length * 3);
  }
}

// // Example usage
// const game = new scoreAverage(5);
// game.throwDarts(20, 18, 25);
// game.throwDarts(15, 20, 10);
// game.throwDarts(12, 15, 8);
// console.log('Average score:', game.calculateAverage());

module.exports = scoreAverage

