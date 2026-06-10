class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        function sort(arr) {
            function swap(i,j) {
                let tempt = arr[i];
                arr[i] = arr[j];
                arr[j] = tempt;
            }

            function recursiveQuickSort(arr, start, end) {
                if (start >= end) {
                    return;
                }

                // quick sort
                function partition(start, end) {
                    let pivot = start;
                    let i = start + 1;
                    let j = end;

                    while (i <= j && i <= end && j >= start) {
                        while (i <= end && arr[i] < arr[pivot]) {
                            i++;
                        }
                        while(j >= start && arr[j] > arr[pivot]) {
                            j--;
                        }

                        if(i < j) {
                            swap(i,j);
                            i++;
                            j--;
                        }
                    }

                    swap(pivot, j);

                    return j;
                }

                const pivot = partition(start, end);
                recursiveQuickSort(arr, start, pivot - 1);
                recursiveQuickSort(arr, pivot + 1, end);
            }

            function recursiveMergeSort(arr, start, end) {
                function merge(arr, start, middle, end) {
                    let result = []
                    let i = start;
                    let j = middle + 1;

                    while(i <= middle && j <= end) {
                        if (arr[i] == arr[j]) {
                            result.push(arr[i]);
                            result.push(arr[j]);
                            i++;
                            j++;
                        }
                        else if (arr[i] < arr[j]) {
                            result.push(arr[i]);
                            i++;
                        }
                        else if (arr[i] > arr[j]) {
                            result.push(arr[j]);
                            j++;
                        }
                    }

                    while (i <= middle) {
                        result.push(arr[i]);
                        i++;
                    }

                    while (j <= end) {
                        result.push(arr[j]);
                        j++;
                    }

                    for (let i = 0, j = start; i < result.length; i++, j++) {
                        arr[j] = result[i];
                    }

                }

                if (start >= end) {
                    return;
                }

                const middle = start + Math.floor((end - start) / 2);

                recursiveMergeSort(arr, start, middle);
                recursiveMergeSort(arr, middle + 1, end);

                merge(arr, start, middle, end);
            }

            // recursiveQuickSort(arr, 0, arr.length - 1);
            recursiveMergeSort(arr, 0, arr.length - 1);

            return arr;
        }

        const sortedArray = sort(nums);

        let result = [];

        // do two pointers with select
        for (let i = 0; i < sortedArray.length; i++) {
            const goal = 0;
            let left = i + 1;
            let right = sortedArray.length - 1;

            if (i > 0 && sortedArray[i] == sortedArray[i - 1]) {
                continue;
            }

            while (left < right) {
                let total = sortedArray[i] + sortedArray[left] + sortedArray[right];

                if (total == goal) {
                    result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
                    right--;
                    left++;


                    while (sortedArray[left] === sortedArray[left - 1]) {
                        left++;
                    }

                    while (sortedArray[right] === sortedArray[right + 1]) {
                        right--;
                    }
                }
                else if (total > goal) {
                    right--;
                }
                else if (total < goal) {
                    left++;
                }
            }
        }

        return result;
    }
}
