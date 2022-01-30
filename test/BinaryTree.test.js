import BinaryTree from '../src/BinaryTree';

describe('Testing BinaryTree', () => {
    it('should create a BinaryTree successfully', () => {
        const tree = new BinaryTree();

        tree.setLeft(1);
        tree.setRight(2);

        expect(tree.left()).toBe(1);
        expect(tree.right()).toBe(2);
    });
});