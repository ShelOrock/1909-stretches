// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

let arr = [1, 2, 3];
let curr = 1; arr[0]
let next = 2; arr[1]

Array.prototype.next = function() {
    let called = 0
    let curr;
    if(called === this.length) {
        if(called === 0) {
            curr = 0;
            console.log(this[curr])
            ++called;
        } else {
            ++curr
            console.log(this[curr])
            ++called;
        }
    } else {
        curr === 0;
        console.log(this[curr])
        called === 0;
    }
}

// no export statement required
