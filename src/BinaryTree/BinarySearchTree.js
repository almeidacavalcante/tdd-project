import Node from './Node';

export default class BinarySearchTree {

    constructor(root = null) {
        this.root = root;
    }

    getSmallerChild(ref) {
        const left = ref?.left()?.data;
        const right = ref?.right()?.data;

        console.log('left, right ', left, right );

        if (left < right) return left;
        if (right < left) return right;
        if (left && !right) return left;
        if (right && !left) return right;
    }

    add(value, ref) {
        const node = new Node(value);

        if (!ref) {
            ref = this.root;
            console.log('ref', ref);
        }

        if (this.root === null) {
            this.root = node;
        } else {    
            if (ref.left() === null && value < ref.data) {
                ref.setLeft(node);
            } else if (ref.right() === null && value > ref.data) {
                ref.setRight(node);
            } else {
                if (ref) {
                    this.add(value, this.getSmallerChild(ref));
                }
            }
        }
    }
}