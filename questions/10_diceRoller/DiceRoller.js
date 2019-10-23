// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, numDice) {
    if(sides < 1 || numDice < 1 || typeof sides !== 'number' || typeof numDice !== 'number') {
      throw 'make a valid dice'
    } else {
    this.sides = sides,
    this.numDice = numDice,
    this.history = []
    }
  }

  roll() {
    const diceRoll = [];
    diceRoll.map((val, idx) => {
      let randomVal = Math.ceil(Math.random() * this.sides);
      this.history.push(randomVal)
      return randomVal;
    });
    return diceRoll;
  }
}

module.exports = { DiceRoller };
