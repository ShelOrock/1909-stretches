// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(update) {
    if(this.state) {
    const updateState = Object.keys(this.state).forEach(key => {
      this.state[key] = update[key];
    });
      this.state = updateState;
    }
    return this.state
  }
}



module.exports = { StatefulThing };
