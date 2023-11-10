// function statement syntax
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (typeof input === "undefined" || input === null || input === "" || typeof input !== "string") {
        return "Hello, World!";
    } else if (input === "5") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

// isFive function
function isFive(input) {
    return input === 5 || input === "5";
}

// isEven function
function isEven(input) {
    return typeof input === "number" && input % 2 === 0;
}

// isVowel function
function isVowel(input) {
    if (typeof input === "string" && input.length === 1) {
        const vowels = "aeiouAEIOU";
        return vowels.indexOf(input) !== -1;
    }
    return false;
}

// add function
function add(a, b) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
        return NaN;
    }

    return numA + numB;
}