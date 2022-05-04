import stringLength from './string-length.js';

test('Number of characters', () => {
    expect(stringLength('T')).toBe(1);
    expect(stringLength('Good')).toBe(4);
    expect(stringLength('Morning')).toBe(7);
    expect(stringLength('Test')).toBe(4);
    expect(()=> stringLength('TestTestTestTestTestTest')).toThrow(Error);
});

