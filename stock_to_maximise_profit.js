/**
 * Task : 
 * Stock Buy Sell to Maximize Profit
    The cost of a stock on each day is given in an array, 
    find the max profit that you can make by buying and selling in those days. 
    For example, if the given array is {100, 180, 260, 310, 40, 535, 695}, 
    the maximum profit can earned by buying on day 0, selling on day 3. 
    Again buy on day 4 and sell on day 6. 
    If the given array of prices is sorted in decreasing order, 
    then profit cannot be earned at all.
**/

const stockPrices = [120, 100, 180, 260, 310, 40, 535, 695];

function maximiseProfit(stock) {
  if (stock.length <= 1) return;

  function isIncreasing(previousPrice, todaysPrice) {
    return todaysPrice >= previousPrice;
  }

  let buyingPrice = 0;
  let runningProfit = 0;
  let previousPricePoint = 0;
  function calcProfit(buy, sell) {
    return sell - buy;
  }

  stock.forEach((pricePoint, inx, stock) => {
    if (!previousPricePoint) {
      // if not set we set it
      previousPricePoint = pricePoint;
      // first iteration break
      return;
    }
    const inc = isIncreasing(previousPricePoint, pricePoint);

    if (inc) {
      buyingPrice = buyingPrice ? buyingPrice : previousPricePoint;
    }

    console.log(`Bought at ${buyingPrice}, today's price ${pricePoint}`);

    if (!isIncreasing(buyingPrice, pricePoint)) {
      // we had to sell one day before
      console.log("Selling at ", stock[inx - 1]);
      runningProfit += calcProfit(buyingPrice, stock[inx - 1]);
      // we have to buy now.
      buyingPrice = pricePoint;
      console.log("Buying at ", buyingPrice);
    }
    if (stock.length - 1 === inx) {
      //sell we have reached the end.
      runningProfit += calcProfit(buyingPrice, stock[inx]);
      console.log("Selling ", stock[inx]);
    }
  });
  return runningProfit;
}


const result = maximiseProfit(stockPrices);
console.log("Profit", result);
