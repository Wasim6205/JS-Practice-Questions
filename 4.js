function createCounter() {
    let count = 0; // Private variable

    return function () {
        count++;
        return count;
    };
}

// Example usage
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// console.log(count); // Error: count is not defined