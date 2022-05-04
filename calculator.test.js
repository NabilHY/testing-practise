import Calculator from './calculator.js';

describe('Calculator', () => {
    const newCalc = new Calculator(10,5);
    const newCalc1 = new Calculator(16,2);
    const newCalc2 = new Calculator(50,10);
    
    test('Fucntion added', () => {
        expect(newCalc.add()).toBe(15); 
        expect(newCalc1.add()).toBe(18); 
        expect(newCalc2.add()).toBe(60); 
    })
    
    test('Fucntion substracted', () => {
        expect(newCalc.substract()).toBe(5);
        expect(newCalc1.substract()).toBe(14);
        expect(newCalc2.substract()).toBe(40);
    })
    
    test('Fucntion multiplied', () => {
        expect(newCalc.multiply()).toBe(50);
        expect(newCalc1.multiply()).toBe(32);
        expect(newCalc2.multiply()).toBe(500);
    })
    
    test('Fucntion divided', () => {
        expect(newCalc.divide()).toBe(2);
        expect(newCalc1.divide()).toBe(8);
        expect(newCalc2.divide()).toBe(5);
    })
})