export default class Queue {
    constructor() {
        this.tail = -1;
        this.head = -1;
        this.items = {};
    }

    push(element) {
        this.tail++;
        this.items = {
            ...this.items,
            [`${this.tail}`]: element,
        };
    }

    pop() {
        this.head++;
        const element = this.items[this.head];
        delete this.items[this.head];
        return element;
    }
}