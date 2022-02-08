export default class Node {

    constructor(data, left = null, right = null) {
        this.data = data;
        this.leftBranch = left;
        this.rightBranch = right;
    }

    getData() {
        return this.data;
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

    isLeaf() {
        return this.left() === null && this.right() === null;
    }
}