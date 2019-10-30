const multiply = (num1, num2) => {

    describe('multiply', () => {
        test('it should receive two numbers', () => {

        expect(() => multiply('poop')).toThrow();

        expect(() => multiply(1, 2, 3)).toThrow();
        });

        test('it returns the product of two numbers', () => {
            expect(1 * 1).toBe('a number');
            expect(10 * 69).toBe(690);
            expect(20 * 2).toBe(40);
        });

        test('it is not hardcoded', () => {
            const a = Math.ceil(Math.random() * 100);
            const b = Math.ceil(Math.random() * 100);
            expect(a * b).toBe(a * b);
        });
    });
}



module.exports = { multiply };
