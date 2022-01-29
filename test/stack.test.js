import Stack from 'Stack';

describe('Testing the Stack implementation', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it('should be created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('should push to the top', () => {
        stack.push('mango');
        expect(stack.pop()).toBe('mango');
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('should be able to pop off and item from the top', () => {
        stack.push('chama na grande');
        const popped = stack.pop();
        expect(stack.items).toEqual({});
        expect(popped).toBe('chama na grande');
    });

    it('should return the correct length', () => {
        stack.push(1);
        stack.push(1);
        stack.push(1);
        stack.push(1);
        expect(stack.length()).toBe(4);
    });

    it('should be able to add 3 items and remove it in the correct order', () => {
        stack.push('first');
        stack.push('second');
        stack.push('third');

        expect(stack.pop()).toBe('third');
        expect(stack.pop()).toBe('second');
        expect(stack.pop()).toBe('first');

        expect(stack.length()).toBe(0);
    });
})