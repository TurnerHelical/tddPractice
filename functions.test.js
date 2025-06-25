import { describe } from 'node:test';
import {capitilize, reverseString, calculator, ceasarCipher, AnalyzeArray} from './functions'

const calc = new calculator();
const ciph = new ceasarCipher();
const analyze = new AnalyzeArray();

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

    test('should multiply 2 numbers', () => {
        expect((calc.multiply(2,2))).toBe(4);
    });

    test('should multiply multiple numbers', () => {
        expect((calc.multiply(2,2,2))).toBe(8);
    });

    test('non integer should return error', () => {
        expect(calc.multiply('this is a test string')).toBe('must be an integer');
    });

    test('should divide 2 number', () => {
        expect(calc.divide(4,2)).toBe(2); 
        });

    test('should divide by multiple numbers', () => {
        expect(calc.divide(6,2,2)).toBe(1.5);
    });

    test('non integer should return an error', () => {
        expect(calc.divide('this is a test string')).toBe('must be an integer');
    });
});

describe('Caesar Cipher function', () => {
    test('shift a letter by the factor and capitilize it', () => {
        expect(ciph.shift('a',1)).toBe('B');
    });
    test('shift a letter by a different factor and capitilize it', () => {
        expect(ciph.shift('a',4)).toBe('E');
    });

    test('should shift a sentence', () => {
        expect(ciph.shift('test sentence', 1)).toBe('UFTU TFOUFODF');
    });

    test('should shift letters and change case', () => {
        expect(ciph.shift('aAfF',1)).toBe('BbGg');
    });

    test('should wrap around to beginning of alphabet when reaching the end of the alphabet', () => {
        expect(ciph.shift('Z',3)).toBe('c');
    })
    
});

describe('Analyze Array Function', () => {
    
    test('should return an object with a value that averages the numbers in the array', () => {
        expect(analyze.returnObject([1,2,3,4])).toEqual({average: 2.5});
    })
})