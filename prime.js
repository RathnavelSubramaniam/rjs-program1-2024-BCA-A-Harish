/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime =(num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Example
let number = 17;

if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is not a Prime Number");
}

module.exports = isPrime;
