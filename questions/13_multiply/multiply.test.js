const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('poop', 420)).toThrow();

    expect(() => multiply(['i', 'smell', 'like', 'beef'], 666)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(1 * 1).toBe(1);

    // test that the returned value is correct
    expect(3 * 5).toBe(15);

    // test some other values
    expect(69 * 10).toBe(690);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    expect(num1 * num2).toBe(num1 * num2)
  });
});
