class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    push(value) {
        this.top++;
        this.items = {
            ...this.items,
            [`${this.top}`]: value,
        }
    }

    pop() {
        const top = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return top;
    }
}

module.exports = {
    Stack
}