// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let tempVal = 1;
    let getN = n;
    let finalRes = '';
    let res = ''
    while(n > 0) {
        res += `${tempVal}`
        n--;
        tempVal++;
    }

    while(getN > 0) {
        finalRes += res.slice(0, getN)
        getN--
    }
    console.log(finalRes);
    return finalRes;
};

module.exports = { floydsTriangle };
