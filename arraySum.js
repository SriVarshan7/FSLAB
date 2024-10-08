function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}


const numbers = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(numbers)); // Output: 15
