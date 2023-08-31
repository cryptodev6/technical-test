function findPairsWithSum(numbers, targetSum) {
    const seenNumbers = new Set();
    const pairs = [];

    for (let num of numbers) {
        const complement = targetSum - num;

        if (seenNumbers.has(complement)) {
            pairs.push([num, complement]);
        }

        seenNumbers.add(num);
    }

    return pairs;
}

function parseInput(input) {
    return input.split(',').map(num => parseInt(num));
}

function printPairs(pairs) {
    if (pairs.length != 0) {
        console.log("Pairs found:");
        pairs.forEach(pair => console.log(`+ ${pair[0]},${pair[1]}`));
    }
}

function main(args) {
    if (args.length !== 2) {
        console.log("Usage: node app.js <comma-separated numbers> <target sum>");
        return;
    }

    const input = args[0];
    const target = parseInt(args[1]);
    const numbers = parseInput(input);

    try {
        const pairs = findPairsWithSum(numbers, target);
        printPairs(pairs);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

const commandLineArgs = process.argv.slice(2);
main(commandLineArgs);
