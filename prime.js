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

const fs = require("fs");
let input = fs.readFileSync(0, "utf8").trim();
let number = Number(input);

if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is not a Prime Number");
}
