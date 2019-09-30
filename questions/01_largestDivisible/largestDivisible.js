/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {

const filtered = arr.filter(item => {
    return item % num === 0;
    });
    return (filtered.length === 0 ? null : filtered.sort().pop())
}

module.exports = { largestDivisible };
