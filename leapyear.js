function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("2024 is a leap year:", isLeapYear(2024)); // Output: true
console.log("2023 is a leap year:", isLeapYear(2023)); // Output: false
