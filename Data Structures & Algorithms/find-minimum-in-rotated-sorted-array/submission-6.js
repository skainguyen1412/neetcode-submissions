class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let smallest = nums[0];

        while (left <= right) {
            if (nums[left] < nums[right]) {
                return Math.min(nums[left], smallest);
            }

            let middle = Math.floor((left + right) / 2)
    
            smallest = Math.min(nums[middle], smallest);
    
            if (nums[middle] >= nums[left]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return smallest;
    }
}
