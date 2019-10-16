function groupBy(arr, attr) {
    if(typeof attr === 'string') {
        return arr.reduce((accum, item) => {
            if(item[attr] in accum) {
                accum[item[attr]].push(item);
            } else {
                accum[item[attr]] = [item];
            }
            return accum;
        }, {});
    } else {
        return arr.reduce((accum, item) => {
            if(attr(item) in accum) {
                accum[attr(item)].push(item);
            } else {
                accum[attr(item)] = [item]
            }
            return accum;
        }, {});
    }

}

module.exports = { groupBy };
