'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY X
 *  2. INTEGER_ARRAY W
 */
function weightedMean(X, W) {
    let weightedMean = 0;
    let totalWeight = 0;
    for (let i = 0; i < X.length; i++) {
        weightedMean += X[i] * W[i];
        totalWeight += W[i];
    }

    weightedMean /= totalWeight;
    weightedMean = weightedMean.toFixed(1);
    console.log(weightedMean);
    return weightedMean;

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const vals = readLine().replace(/\s+$/g, '').split(' ').map(valsTemp => parseInt(valsTemp, 10));

    const weights = readLine().replace(/\s+$/g, '').split(' ').map(weightsTemp => parseInt(weightsTemp, 10));

    weightedMean(vals, weights);
}

exports.weightedMean = weightedMean;