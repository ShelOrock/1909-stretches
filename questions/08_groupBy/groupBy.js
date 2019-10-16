function groupBy(arr, attr) {
    if(typeof attr === 'string') {
        return arr.reduce((accum, item) => {
            if(item.length in accum) {
                accum[item.length].push(item);
            } else {
                accum[item.length] = [item];
            }
            return accum;
        }, {});
    } else {
        return arr.reduce((accum, item) => {
            if(Math.floor(item) in accum) {
                accum[Math.floor(item)].push(item);
            } else {
                accum[Math.floor(item)] = [item]
            }
            return accum;
        }, {});
    }

}

module.exports = { groupBy };
