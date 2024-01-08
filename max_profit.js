// You are given an array prices where prices[i] is the price of a given
// stock on the ith day. You want to maximize your profit by choosing a single day to buy one
// stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return
// 0

function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0 // Cannot make profit with less than 2 day's data
    }

    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        // Update the minimum price
        minPrice = Math.min(minPrice, prices[i])
        // Calculate potential profit and update maximum profit
        const currentProfit = prices[i] - minPrice
        maxProfit = Math.max(maxProfit, currentProfit)
    }

    return maxProfit
}

const prices = [ 7, 8, 4, 2, 1, 4, 6, 6]
const result = maxProfit(prices)

console.log(result)