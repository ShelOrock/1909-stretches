const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let reduced = sales
    .reduce((accum, item) => {
      const prop = item.productId;
      if(!accum[prop]) {
        accum[prop] = [];
      }
      accum[prop].push(item.amount);
      return accum;
    }, {})

  const most = Object.values(reduced).map(val => {
    return val.reduce((accum, item) => {
      return accum + item
    });
  });

  console.log(reduced);

  if(sale = []) {
    return {};
  }
  return { id: '', total: Math.max(...most)}
}

module.exports = { bestSales, sales };
