const repeater = (func, n) => {
  return new Array(n).fill('').map(item => func())
};

module.exports = { repeater };
