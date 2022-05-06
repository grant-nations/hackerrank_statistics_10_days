const {weightedMean} = require("./day1")

test('weighted mean test 1', () => {
    expect(weightedMean([10, 40, 30, 50, 20], [1, 2, 3, 4, 5])).toBe("32.0");
});