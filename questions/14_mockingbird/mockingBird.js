const repeater = (func, n) => {
  return new Array(n).fill('').map(item => item = func())
};

module.exports = { repeater };
