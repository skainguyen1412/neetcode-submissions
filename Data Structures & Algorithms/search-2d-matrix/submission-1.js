class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        function bns(arr) {
            let left = 0;
            let right = arr.length - 1;

            while (left <= right) {
                let middle = Math.floor((left+right) / 2);

                if (arr[middle] == target) {
                    return true;
                }

                if (arr[middle] > target) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            }

            return false;
        }


        for (let i = 0; i < matrix.length; i++) {
            let last = matrix[i].length - 1;

            if (target >= matrix[i][0] && target <= matrix[i][last]) {
                return bns(matrix[i])
            }
        }

        return false;
    }
}
