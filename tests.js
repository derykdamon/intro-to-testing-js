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
describe('helloYou', function() {
    it('should be a defined function', function() {
        expect(typeof helloYou).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloYou()).toBe("string");
    });
    it('should return the string "Hello, You!" when executed', function() {
        expect(helloYou()).toBe("Hello, You!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloYou()).not.toBe(undefined);
    });
});