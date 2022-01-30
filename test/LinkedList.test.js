import LinkedList from '../src/LinkedList';

describe('Test LinkedList', () => {
    
    it('should create a linked list', () => {
        const linked = new LinkedList('first');
        expect(linked.preview).toBeNull()
        expect(linked.node()).toBe('first');
    });

    it('should create a chain of nodes', () => {
        const link1 = new LinkedList(1);
        const link2 = new LinkedList(2, link1);
        const link3 = new LinkedList(3, link2);
        const link4 = new LinkedList(4, link3);

        expect(link4.prev().prev().prev().node()).toBe(1);
        expect(link4.prev().prev().prev().preview).toBe(null);
    });

    it('should unlink', () => {
        const link1 = new LinkedList(1);
        const link2 = new LinkedList(2, link1);
        const link3 = new LinkedList(3, link2);
        const link4 = new LinkedList(4, link3);
        link2.unlink();
        expect(link4.prev().prev().preview).toBe(null);
    });
});