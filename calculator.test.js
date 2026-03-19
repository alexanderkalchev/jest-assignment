import calc from "./calculator.js"

test("Addition", () => {
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(-1 , 3)).toBe(2);
    expect(calc.add(0, 3)).toBe(3);
})

test("Subtraction", () => {
    expect(calc.sub(4, 1)).toBe(3);
    expect(calc.sub(3,12)).toBe(-9);
    expect(calc.sub(4, 0)).toBe(4);
})

test("Multiplication", () => {
    expect(calc.mul(3, 5)).toBe(15);
    expect(calc.mul(-2, 3)).toBe(-6);
    expect(calc.mul(0, 3)).toBe(0);
})

test("Division", () => {
    expect(calc.div(4,2)).toBe(2);
    expect(calc.div(0,4)).toBe(0);
    expect(() => calc.div(12,0)).toThrow(Error);
})