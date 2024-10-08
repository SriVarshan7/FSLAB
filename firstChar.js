function isFirstCharUpperCase(str) {
    return /^[A-Z]/.test(str);
}

console.log("Is the first character uppercase in 'Hello'?", isFirstCharUpperCase("Hello")); 
console.log("Is the first character uppercase in 'hello'?", isFirstCharUpperCase("hello")); 
