const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('should print 1 if they receive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test('should print fizz if they receive 3', () => {
        const expected = 'fizz';
        const result = fizzbazz(3);
        expect(expected).toBe(result)
    })

    test('should print fizz if they receive a multiple of 3', () => {
        const expected = 'fizz'
        const result = fizzbazz(6);
        expect(expected).toBe(result)
    })

    test("should print buzz if they receive a multiple of 5", () => {
        const expected = 'buzz';
        const result = fizzbazz(10);
        expect(expected).toBe(result);
    })

    test("should print fizzbuzz if they receive a multiple of 3 and 5", () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })
})