import analyzeArray from "./analyzeArray.js"

test("Happy path", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
    expect(analyzeArray([0, -5, -2, -9, -4])).toStrictEqual({
        average: -4,
        min: -9,
        max: 0,
        length: 5
    })
    expect(analyzeArray([42])).toStrictEqual({
        average: 42,
        min: 42,
        max: 42,
        length: 1
    })
    expect(analyzeArray([7, 7, 7, 7])).toStrictEqual({
        average: 7, 
        min: 7,
        max: 7,
        length: 4
    })
    expect(analyzeArray([1.5, 2.5, 5, 3])).toStrictEqual({
        average: 3, 
        min: 1.5,
        max: 5,
        length: 4
})
})