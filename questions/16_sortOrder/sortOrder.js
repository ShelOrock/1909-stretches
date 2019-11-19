/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, key1, key2) {
    const meow = data.reduce((prev, curr) => {
        for(key1 in prev) {
            if(prev[key1]) {
                if(prev.key1 > curr.key1) {
                    prev[key1] = curr.key1
                }
            } else {
                prev[key1] = prev[key1]
            }
        }
        return prev;
    });

    return [];
}

module.exports = { sortOrder };
