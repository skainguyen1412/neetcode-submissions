class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // Using prefix sum
        // Basically we need to find the product (multiply) of all of element execpt
        // at the position i
        // Using advance course we know that we can use the algorithm prefix sum
        // So idea quite simple, we find prefix and postfix products of element at i
        // And multiply it together
        
        let prefixSum = []
        let postfixSum = []
        let i = 0;
        let j = nums.length - 1;

        while (i < nums.length && j >= 0) {
            let prefixVal = nums[i] * (prefixSum[i - 1] ?? 1)
            i++;
            prefixSum.push(prefixVal);

            let postfixVal = nums[j] * (postfixSum[nums.length - 1 - j - 1] ?? 1) 
            postfixSum.push(postfixVal);
            j--;
        }

        postfixSum.reverse();

        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let preValue = prefixSum[i - 1] ?? 1;
            let postValue = postfixSum[i + 1] ?? 1;

            result.push(preValue * postValue);
        }

        return result;
    }
}
