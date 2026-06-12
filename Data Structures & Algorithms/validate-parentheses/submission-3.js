class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openingBracket = [];
        const open = ['(', '{', '['];

        for (const char of s) {
            if (open.includes(char)) {
                openingBracket.push(char);
            } else {
                if (char == ')' && openingBracket.pop() != '(') {
                    return false;
                }

                if (char == ']' && openingBracket.pop() != '[') {
                    return false;
                }

                if (char == '}' && openingBracket.pop() != '{') {
                    return false;
                }
            }
        }

        return openingBracket.length == 0;
    }
}
