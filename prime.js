const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

module.exports = isPrime;

const fs = require("fs");

if (require.main === module) {
    let input = fs.readFileSync(0, "utf8").trim();
    const number = Number(input);

    console.log(isPrime(number));
}
