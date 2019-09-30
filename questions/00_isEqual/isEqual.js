function isEqual(obj1, obj2) {

return ((Object.entries(obj1).join('') === Object.entries(obj2).join('')) ? true : false)
  }

module.exports = { isEqual };
