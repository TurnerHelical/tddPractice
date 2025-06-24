import {capitilize} from './capitalize'

describe('capitilize function', () => {
    test('should capitilize the first letter', () => {
        expect(capitilize('hello')).toBe('Hello');
    });
    test('if number is first do nothing', () => {
        expect(capitilize(100)).toBe(100);
    });
    test('capitilize only the first word of a sentence', () => {
        expect(capitilize('this is a test')).toBe('This is a test');
    })
});