import {add} from './add';

describe('Add function',()=>{
    test('Returns 0 if empty string is passed',()=>{
        expect(add('')).toBe(0);
    })
    test('Returns value of a single number if one number is passed',()=>{
        expect(add('10')).toBe(10);
    })
    test('Numbers seperated by comma should be added',()=>{
        expect(add('1,2,3')).toBe(6);
    })
    test('Adds numbers given in string seperated by commas containing spaces',()=>{
        expect(add('1,   2, 3   ')).toBe(6);
    })
    test("Should handle \\n with commas",()=>{
        expect(add("1\n4\n6")).toBe(11);
        expect(add("10\n5,2")).toBe(17);
    })
    test("Should change the delimiter matching with the pattern //delimiter\n[numbers]",()=>{
        expect(add("//;\n12;3;5")).toBe(20);
        expect(add("//#\n45#5")).toBe(50);
        expect(add("//*\n1*2*3*4")).toBe(10);
        expect(add("//.\n45.5")).toBe(50);
        expect(add("//+\n12+3+5")).toBe(20);
    })
    test("Throw an exception if add called with negative number/numbers",()=>{
        expect(()=>add("-1,2,3")).toThrow("negative numbers not allowed -1");
        expect(()=>add("2,-1,-4,5")).toThrow("negative numbers not allowed -1,-4");
    })
    test("Should support custom delimiter and throw on negatives", () => {
        expect(() => add("//;\n1;-2;3")).toThrow("negative numbers not allowed -2");
    });
})