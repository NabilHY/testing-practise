import reverseString from "./reverse-string";

test ('Reverse string', () => {
    expect(reverseString('good')).toBe('doog');
    expect(reverseString('car')).toBe('rac');
})