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
    const diceRoll = new Array(this.numDice).fill(0).map((val, idx) => {
      val = idx + 1;
      return val;
    })
    this.history.push(Math.ceil(Math.random()) * diceRoll.length)
  }
}

module.exports = { DiceRoller };
