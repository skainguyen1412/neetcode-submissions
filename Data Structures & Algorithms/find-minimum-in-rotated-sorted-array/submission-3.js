class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        function recursiveFindIndex(start,end) {
            if (start > end) {
                return;
            }

            let middle = Math.floor((start+end) / 2);

            if (nums[middle + 1] < nums[middle]) {
                return middle + 1;
            } 

            if (nums[middle - 1] > nums[middle]) {
                return middle;
            }

            let right = recursiveFindIndex(middle + 1, end);

            if (right) {
                return right;
            }

            let left = recursiveFindIndex(start, middle - 1);
            
            if (left) {
                return left;
            }
        }

        const index = recursiveFindIndex(0, nums.length - 1);

        if (!index) {
            return nums[0];
        }

        return Math.min(nums[index], nums[0]);
    }
}
