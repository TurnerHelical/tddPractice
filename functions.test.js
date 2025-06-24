import { describe } from 'node:test';
import {capitilize, reverseString, calculator} from './functions'

const calc = new calculator();

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

describe('reverse string function', () => {
    test('should return string reversed', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('should return whole sentence reversed but keep spaces', () => {
        expect(reverseString('this is a test')).toBe('tset a si siht');
    });

    test('if not a string do nothing', () => {
        expect(reverseString(100)).toBe(100);
    });
});

describe('basic calculator function', () => {
    test('should add both numbers', () => {
        expect((calc.add(1,2))).toBe(3);
    });
    test('should add more than 2 numbers', () => {
        expect((calc.add(1,2,3,4))).toBe(10);
    });
    test('returns an error if not a number', () => {
        expect((calc.add('test string'))).toBe('must be an integer');
    });

    test('should subract b from a', () => {
        expect((calc.subtract(2,1))).toBe(1);
    });

    test('should work with more than 2 numbere', () => {
        expect((calc.subtract(5,1,1))).toBe(3);
    });

    test('returns an error if not a number', () => {
        expect((calc.subtract('test string'))).toBe('must be an integer')
    });
});