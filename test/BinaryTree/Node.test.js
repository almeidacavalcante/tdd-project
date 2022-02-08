import Node from '../../src/BinaryTree/Node';

describe('Testing BinaryTree', () => {
    it('should create a BinaryTree successfully', () => {
        
        const node1 = new Node('node left');
        const node2 = new Node('node right');

        const tree = new Node('data', node1, node2);

        expect(tree.left().getData()).toBe('node left');
        expect(tree.right().getData()).toBe('node right');
        expect(tree.getData()).toBe('data');
    });

    it('should be possible to see if a Node is leaf', () => {
        const node = new Node('single');
        expect(node.isLeaf()).toBe(true);
    });

    it('should not be leaf it the node has children', () => {
        const child = new Node('child');
        const node = new Node('parent', child);

        expect(node.isLeaf()).toBe(false);
    });
});