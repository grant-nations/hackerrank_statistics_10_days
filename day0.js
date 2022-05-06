function processData(input) {
    const input_arr = input.split(/\s+/);
    const N = parseInt(input_arr[0]);
    let X = input_arr.slice(1);

    let x = 0;
    while(x < N){
        X[x] = parseFloat(X[x]);
        x++
    }

    let mean = 0;
    for (let i = 0; i < N; i++){
        mean += X[i];
    }

    mean /= N;

    X = X.sort((a, b) => a - b);

    let middle = (N - 1)/2;
    let median;
    if( (middle - Math.floor(middle)) !== 0){
        let middle1 = Math.floor(middle);
        let middle2 = Math.ceil(middle);
        median = (X[middle1] + X[middle2])/2.0;
    } else {
        median = X[middle];
    }

    let counts = {}
    X.forEach(function(e) {
        if(counts[e] === undefined) {
            counts[e] = 0
        }
        counts[e] += 1
    })

    let maxCount = counts[X[0]];
    let mode = X[0];
    X.forEach((item) => {
            if((counts[item] === maxCount && item <= mode) || counts[item] > maxCount){
                maxCount = counts[item];
                mode = item;
            }
        }
    );

    console.log(mean.toFixed(1));
    console.log(median.toFixed(1));
    console.log(mode);

    return "" + mean.toFixed(1) + "\n" + median.toFixed(1) + "\n" + mode;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

exports.processData = processData;