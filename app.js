function findPairsWithSum(numbers, targetSum) {
    const seenNumbers = new Set();
    return numbers.reduce((pairs, num) => {
        const complement = targetSum - num;
        if (seenNumbers.has(complement)) pairs.push([num, complement]);
        seenNumbers.add(num);
        return pairs;
    }, []);
}

const parseInput = input => input.split(',').map(Number);

const printPairs = pairs => {
    if (pairs.length) {
        console.log("Pairs found:");
        pairs.forEach(pair => console.log(`+ ${pair.join()}`));
    }
};

function main(args) {
    if (args.length !== 2) {
        console.log("Usage: node app.js <comma-separated numbers> <target sum>");
        return;
    }

    const [input, target] = args;
    const numbers = parseInput(input);

    try {
        const pairs = findPairsWithSum(numbers, parseInt(target));
        printPairs(pairs);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

main(process.argv.slice(2));
