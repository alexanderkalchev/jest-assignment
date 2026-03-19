import reverseMethod from "./reverse.js"

test("Happy path", () => {
    expect(reverseMethod("Test")).toBe("tseT");
    expect(reverseMethod("This is a string")).toBe("gnirts a si sihT");
    expect(reverseMethod("K o n")).toBe("n o K");
})