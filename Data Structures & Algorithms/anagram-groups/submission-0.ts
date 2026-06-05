class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Basically i was right at first when thought about the approach hashing
        // But my original ideas is close to On^2 which is not idea
        // Original idea is hashing all of them and then loop through array hashing again 
        // Which is not idea
        // The better approach solution of this problem i didnt figure out
        // It might hard to find
        // We create a map for order of character from 0 - 26 (a - z)
        // And then we make the hashing for each of element but the key is the whole word
        // Which for example the key is (a-c-t) but to make it in order and we dont have to sort it again 
        // We insert it to the 0 arrays and let that a key

        let result: string[][] = [];
        let hashTable = new Map()

        for(let i = 0; i < strs.length; i++) {
            let mapChar = new Array(26).fill(0);

            for (const char of strs[i]) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

                mapChar[index] = mapChar[index] + 1;
            }

            const key = mapChar.join(',');

            if (hashTable.get(key)) {
                let tempt = hashTable.get(key);

                tempt.push(strs[i]);
                hashTable.set(key, tempt);
            } else {
                hashTable.set(key, [strs[i]]);
            }
        }

        for (const value of hashTable.values()) {
            result.push(value)
        }


        return result;
    }
}
