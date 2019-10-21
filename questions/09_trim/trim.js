const trim = obj => {
    const filtered = Object.entries(obj).filter(item => item[1] !== null && item[1] !== undefined);
    return filtered.reduce((accum, curr) => {
        accum[curr[0]] = accum[curr[1]]
        return accum;
    }, {});
};

module.exports = { trim };
