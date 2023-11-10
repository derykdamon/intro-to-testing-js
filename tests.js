// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});



// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when passed "Jane"', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});

// Exercise #1 - Test Drive for `sayHello` Function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });

    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

    it('should return "Hello, Jane!" when passed "Jane"', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });

    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });

    it('should return "Hello, World!" when passed a number inside a string', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
});

// Exercise #2 - Ensure `sayHello` Returns a String
describe('sayHello', function() {
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

    it('should return "Hello, Jane!" when passed "Jane"', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });

    it('should return "Hello, World!" when passed a number inside a string', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });

    it('should return "Hello, Alex!" when passed "Alex"', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });

    it('should return "Hello, Pat!" when passed "Pat"', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
});

// Exercise #3 - Confirm Output for `sayHello`
describe('sayHello', function() {
    it('should return "Hello, Jane!" when passed "Jane"', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });

    it('should return "Hello, World!" when passed a number inside a string', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });

    it('should return "Hello, Alex!" when passed "Alex"', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });

    it('should return "Hello, Pat!" when passed "Pat"', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });

    it('should return "Hello, World!" when called without an argument', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
});

// Exercise #4 - Add More Tests for `sayHello`
describe('sayHello', function() {
    // ... (previously mentioned tests)
    it('should return "Hello, Alex!" when passed "Alex"', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed "Pat"', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called without an argument', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed null', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed an empty string', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed a number', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed a number inside a string', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed an array', function() {
        expect(sayHello([])).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed an object', function() {
        expect(sayHello({})).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed a function', function() {
        expect(sayHello(function() {})).toBe("Hello, World!");
    });
});

// Exercise #10 - Test for `isFive` Function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });

    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });

    it('should return true when passed "5"', function() {
        expect(isFive("5")).toBe(true);
    });

    it('should return false when passed other numbers', function() {
        expect(isFive(3)).toBe(false);
        expect(isFive(10)).toBe(false);
    });

    it('should return false when passed a non-number', function() {
        expect(isFive("banana")).toBe(false);
        expect(isFive(true)).toBe(false);
    });
});

// Exercise #11 - Test for `isEven` Function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });

    it('should return true when passed an even number', function() {
        expect(isEven(4)).toBe(true);
        expect(isEven(0)).toBe(true);
    });

    it('should return false when passed an odd number', function() {
        expect(isEven(3)).toBe(false);
        expect(isEven(7)).toBe(false);
    });

    it('should return false when passed a non-number', function() {
        expect(isEven("banana")).toBe(false);
        expect(isEven(true)).toBe(false);
    });

    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
});

// Exercise #12 - Test for `isVowel` Function
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });

    it('should return true for lowercase vowels', function() {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("e")).toBe(true);
        expect(isVowel("i")).toBe(true);
        expect(isVowel("o")).toBe(true);
        expect(isVowel("u")).toBe(true);
    });

    it('should return true for uppercase vowels', function() {
        expect(isVowel("A")).toBe(true);
        expect(isVowel("E")).toBe(true);
        expect(isVowel("I")).toBe(true);
        expect(isVowel("O")).toBe(true);
        expect(isVowel("U")).toBe(true);
    });

    it('should return false for non-vowel characters', function() {
        expect(isVowel("b")).toBe(false);
        expect(isVowel("Z")).toBe(false);
        expect(isVowel("1")).toBe(false);
        expect(isVowel("@")).toBe(false);
    });

    it('should return false for an empty string', function() {
        expect(isVowel("")).toBe(false);
    });
});

// Exercise #13 - Test for `add` Function
describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });

    it('should return the sum of two numbers', function() {
        expect(add(2, 3)).toBe(5);
        expect(add(-3, -9)).toBe(-12);
    });

    it('should return the correct sum for decimal numbers', function() {
        expect(add(1.5, 2.5)).toBe(4);
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should return NaN when both inputs are not numeric', function() {
        expect(add("banana", "split")).toBeNaN();
    });
});


