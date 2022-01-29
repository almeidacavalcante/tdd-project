export default class Stack {
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
        const element = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return element;
    }

    length = () => {
        return Object.keys(this.items).length;
    }
}