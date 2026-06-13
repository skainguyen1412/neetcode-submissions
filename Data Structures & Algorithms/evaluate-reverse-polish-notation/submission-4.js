class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // 1 2 + 
        // 

        let stack = [];
        const operators = ['+', '-', '*', '/'];

        for (const char of tokens) {
            if (operators.includes(char)) {
                if (char == '+') {
                    let second = Number(stack.pop());
                    let first = Number(stack.pop()); 
                    let total = first + second;
                    stack.push(Math.round(total))
                } else if (char == '-') {
                    let second = Number(stack.pop());
                    let first = Number(stack.pop()); 
                    let total = first - second;
                    stack.push(Math.round(total));
                } else if (char == '*') {
                    let second = Number(stack.pop());
                    let first = Number(stack.pop()); 
                    let total = first * second;
                    stack.push(Math.trunc(total))
                } else if (char == '/') {
                    let second = Number(stack.pop());
                    let first = Number(stack.pop()); 
                    let total = first / second;
                    stack.push(Math.trunc(total))
                }
            } else {
                stack.push(char);
            }

        }

        return Math.trunc(stack[0]);
    }
}
