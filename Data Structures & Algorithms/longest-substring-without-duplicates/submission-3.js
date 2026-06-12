class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashTable = new Map();

        let left = 0;
        let right = 0;
        let maxLength = 0;

        while (left < s.length) {
            if (right >= s.length) {
                const currentLength = right - left;
                maxLength = Math.max(currentLength, maxLength);
                break;
            }

            if (hashTable.has(s[right].charCodeAt(0))) {
                hashTable.delete(s[left].charCodeAt(0));
                const currentLength = right - left;
                maxLength = Math.max(currentLength, maxLength);
                left++;
            } else {
                hashTable.set(s[right].charCodeAt(0), true);
                right++;
            }
        }

        return maxLength;
    }
}
