// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let tempVal = 1;
    let res = ''
    while(n > 0) {
        res += `${tempVal}`
        n--;
        tempVal++;
    }
    console.log(res);
};

module.exports = { floydsTriangle };
