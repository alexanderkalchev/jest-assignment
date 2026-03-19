import caesarCipher from "./caesarCipher.js"

test("Happy path", () => {
    expect(caesarCipher("minus one", 26)).toBe("minus one");
    expect(caesarCipher("this is a test", 5)).toBe("ymnx nx f yjxy");
    expect(caesarCipher("apple", 12)).toBe("mbbxq");
    expect(caesarCipher("appple carrot vinegar", 67)).toBe("peeeat rpggdi kxctvpg");
    expect(caesarCipher("AppplE carrot vinegar", 67)).toBe("PeeeaT rpggdi kxctvpg");
})