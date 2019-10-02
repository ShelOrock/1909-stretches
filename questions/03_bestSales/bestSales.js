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
  const poo = sales.reduce((accum, item) => {
    if(item.productId in accum) {
      return accum.amount += item.amount;
    } else {
      const amount = accum.amount = item.amount;
      const productId = accum.productId = item.productId;
      return accum.concat({amount, productId})
    }
  }, [])
  console.log(poo)
}

module.exports = { bestSales, sales };
