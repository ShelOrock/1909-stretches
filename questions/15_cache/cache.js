function cache(func) {
    if(typeof func !== 'function') throw new Error('Input must be a function.')
    let memo = {};
    return function(...arg) {
        if(memo[arg] !== undefined) {
            return memo[arg];
        } else {
            memo[arg] = func(...arg)
            return memo[arg]
        }
    }
}

module.exports = { cache };
