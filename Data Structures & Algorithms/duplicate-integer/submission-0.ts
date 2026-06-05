class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // First come to mind is hashing
        // With this kind of problem we got O(n)

        let hashTable: Map<number, number> = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (hashTable.has(nums[i])) {
                return true;
            } else {
                hashTable.set(nums[i], 1);
            }
        }

        return false;
    }
}
