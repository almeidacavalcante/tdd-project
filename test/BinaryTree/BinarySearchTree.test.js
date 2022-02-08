import BinarySearchTree from '../../src/BinaryTree/BinarySearchTree';
import Node from '../../src/BinaryTree/Node';


describe('Binary Sarch Tree tests', () => {
    
    it('should create a binary search tree successfully', () => {     
        const BST = new BinarySearchTree();

        expect(BST.root).toBe(null);
    });

    it('should allow to add item correctly', () => {

        let bst = new BinarySearchTree();

        const data = [1,2,3,4,5,6,7,8,9,10];
        const data1 = [10,9,8,7,6,5,4,3,2,1];
        const data2 = [1,3,2,5,4,8,66,7,4,9,0];


        data.forEach( element => {
            bst.add(element);
        });
        console.log('bst', JSON.stringify(bst));

        bst =  new BinarySearchTree();
        data1.forEach( element => {
            bst.add(element);
        })
        console.log('bst', JSON.stringify(bst));


        bst =  new BinarySearchTree();
        data2.forEach( element => {
            bst.add(element);
        })

        console.log('bst', JSON.stringify(bst));
    });
});