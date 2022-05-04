import capatalizeString from './capatalize-string.js';

test('Number of characters', () => {
    expect(capatalizeString('hello')).toBe('Hello');
    expect(capatalizeString('good')).toBe('Good');
    expect(capatalizeString('morning')).toBe('Morning');
    expect(capatalizeString('test')).toBe('Test');
});
