class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        function bns(start,end) {
            if (nums[start] > target) {
                return;
            } 

            if(nums[end] < target) {
                return;
            }

            while (start <= end) {
                let middle = Math.floor((start+end) / 2);
    
                if (nums[middle] == target) {
                    return middle;
                }
    
                if (nums[middle] > target) {
                    end = middle - 1;
                } else {
                    start = middle + 1;
                }
            }
        }

        while (left <= right) {
            if (nums[left] <= nums[right]) {
                const search = bns(left, right);

                if (search >= 0) {
                    return search;
                }
                break;
            }

            let middle = Math.floor((left + right) / 2)

            if (nums[middle] == target) {
                return middle;
            }

            if (nums[middle] >= nums[left]) {
                // do bns 
                const search = bns(left, middle - 1);

                if (search >= 0) {
                    return search;
                }

                left = middle + 1;
            } else {
                const search = bns(middle + 1, right);

                if (search >= 0) {
                    return search;
                }

                right = middle - 1;
            }
        }

        return -1;
    }
}
