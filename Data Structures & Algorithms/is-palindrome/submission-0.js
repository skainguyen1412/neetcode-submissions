class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // check if it is alphabet and numbers
        function checkAlphabetNum(char) {
            const unicodeVal = char.charCodeAt(0);

            if (unicodeVal >= 'A'.charCodeAt(0) && unicodeVal <= 'Z'.charCodeAt(0)) {
                return true;
            }

            if (unicodeVal >= 'a'.charCodeAt(0) && unicodeVal <= 'z'.charCodeAt(0)) {
                return true;
            }

            if (unicodeVal >= '0'.charCodeAt(0) && unicodeVal <= '9'.charCodeAt(0)) {
                return true;
            }

            return false;
        }
        // take that 
        // do two pointers

        let i = 0;
        let j = s.length - 1;
        let isPalindrome = true;

        while (i < s.length && j >= 0) {
            if (i > j) {
                break;
            }

            if (!checkAlphabetNum(s[i])) {
                i++;
                continue;
            } 

            if (!checkAlphabetNum(s[j])) {
                j--;
                continue;
            }

            if (s[i].toLowerCase() != s[j].toLowerCase()) {
                isPalindrome = false;
                break;
            }

            i++;
            j--;
        }

        return isPalindrome;
    }
}
