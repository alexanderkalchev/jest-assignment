import capitalize from "./capitalize";

test("Happy path", () => {
    expect(capitalize("test")).toBe("Test");
    expect(capitalize("this is a sentence")).toBe("This is a sentence");
})

test("Already capitalized", () => {
    expect(capitalize("Already")).toBe("Already");
    expect(capitalize("Already capitalized")).toBe("Already capitalized");
})