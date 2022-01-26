const {Stack} = require('../src/Stack')

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
        stack = new Stack();
        stack.push('chama na grande');
        const popped = stack.pop();
        expect(stack.items).toEqual({});
        expect(popped).toBe('chama na grande');
    });
})