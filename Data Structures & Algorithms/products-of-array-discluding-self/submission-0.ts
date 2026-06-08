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

        //TODO: Could be better using while with two pointers instead of two 
        // for loop
        for (let i = 0; i < nums.length; i++) {
            let multiplyValue = () => {
                if (i == 0) {
                    return 1;
                } else {
                    return prefixSum[i - 1]
                }
            }

            let value = nums[i] * multiplyValue();
            prefixSum.push(value);
        }   

        let postfixSum = [];

        for (let i = nums.length - 1; i >= 0; i--) {
            let multiplyValue = () => {
                if (i == nums.length - 1) {
                    return 1;
                } else {
                    return postfixSum[nums.length - 1 - i - 1];
                }
            }

            let value = nums[i] * multiplyValue();
            postfixSum.push(value);
        }

        postfixSum.reverse();

        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let preValue = prefixSum[i - 1] ?? 1;
            let postValue = postfixSum[i + 1] ?? 1;

            result.push(preValue * postValue);
        }

        console.log(prefixSum)
        console.log(postfixSum)

        return result;
    }
}
