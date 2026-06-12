class MinStack {
    constructor() {
        this.arr = []
        this.prefixMin = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currentMin = this.prefixMin.length === 0 ? val : Math.min(val, this.prefixMin[this.prefixMin.length - 1]);
        this.prefixMin.push(currentMin)
        return this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.prefixMin.pop();
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
        return this.prefixMin[this.prefixMin.length - 1];
    }
}
