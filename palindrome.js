function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log("Is 'Madam' a palindrome?", isPalindrome("Madam")); // Output: true
console.log("Is 'Hello' a palindrome?", isPalindrome("Hello")); // Output: false
