function times(num) {
    const poop = num;
    if(typeof num != 'number') {
throw 'Numbers only!'
    }
    return (num) => {
            return num *= poop;
    }
}

module.exports = { times };
