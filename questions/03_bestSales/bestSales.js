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
  const best = sales.reduce((allItems, item) => {
    if(item.productId in allItems) {
      item.amount += item.amount;
    } else {
      item = item.amount
    }
  }, {})
  console.log(best);
}

module.exports = { bestSales, sales };
