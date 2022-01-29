import Queue from '../src/Queue';

describe('Testing Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    it('should be created empty', () => {
        expect(queue.items).toEqual({});
    });

    it('should add an item', () => {
        queue.push('item');
        expect(queue.items).toEqual({'0': 'item'});
        expect(queue.items[0]).toBe('item');
    });

    it('should pop the first added item', () => {
        queue.push('first');
        queue.push('second');
        queue.push('third');

        queue.pop();
        queue.pop();
        const poped = queue.pop();
        expect(poped).toBe('third');
    });
});