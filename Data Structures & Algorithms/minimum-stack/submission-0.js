class MinStack {
    constructor() {
        this.arr = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        return this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let smallest = this.arr[0];

        for (let i = 0; i < this.arr.length; i++) {
            smallest = Math.min(smallest, this.arr[i]);
        }

        return smallest;
    }
}
