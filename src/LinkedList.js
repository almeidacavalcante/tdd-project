export default class LinkedList {
    constructor(element, preview = null) {
        this.preview = preview;
        this.element = element;
    }

    prev() {
        return this.preview;
    }

    node() {
        return this.element;
    }

    unlink() {
        this.preview = null;
    }
}