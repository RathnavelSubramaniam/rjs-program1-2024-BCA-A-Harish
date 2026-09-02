/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

module.exports = isPrime;

// Run only when prime.js is executed directly
if (require.main === module) {
    const input = require("fs").readFileSync(0, "utf8").trim();
    const number = Number(input);

    if (isPrime(number)) {
        console.log(number + " is a Prime Number");
    } else {
        console.log(number + " is not a Prime Number");
    }
}
