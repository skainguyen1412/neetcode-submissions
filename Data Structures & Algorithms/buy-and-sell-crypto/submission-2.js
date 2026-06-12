class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let smallest = prices[0]

        for (let left = 0; left < prices.length; left++) {
            if (prices[left] > smallest) {
                continue;
            }

            for (let right = left + 1; right < prices.length; right++) {
                if (prices[right] > prices[left]) {
                    if (prices[right] - prices[left] > maxProfit) {
                        maxProfit = prices[right] - prices[left];
                        smallest = prices[left];
                    }
                } else {
                    break;
                }
            }
        }


        return maxProfit;
    }
}
