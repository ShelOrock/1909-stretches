function cache(func) {
    if(typeof func !== 'function') throw new Error('Input must be a function.')
    
}

module.exports = { cache };
