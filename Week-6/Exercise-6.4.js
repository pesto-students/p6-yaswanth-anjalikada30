const maxProfit = function (prices) {
    let profit = 0;
    let buyPrice = prices[0];
    for (let price of prices) {
        /*replace profit if we get more profit on other day*/
        if (price - buyPrice > profit)
            profit = price - buyPrice;
        /*replace buyPrice if we get less buy price*/
        if (price < buyPrice)
            buyPrice = price;
    }
    return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))