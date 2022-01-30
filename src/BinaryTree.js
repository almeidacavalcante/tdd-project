export default class BinaryTree {

    constructor() {
        this.leftBranch = null;
        this.rightBranch = null;
    }

    setLeft(element) {
        this.leftBranch = element;
    }

    setRight(element) {
        this.rightBranch = element;
    }

    left() {
        return this.leftBranch;
    }

    right() {
        return this.rightBranch;
    }
}