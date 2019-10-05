/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  // let combinedArr = [];
  // let arr = [];
  // const entries = objs.forEach(item => {
  //   arr.push(Object.entries(item));
  // })

  // for(let i = 0; i < arr.length; i++) {
  //     for(let j = 0; j < arr[i].length; j++) {
  //       if(combinedArr.includes(arr[i][0])) {
  //         arr[i][0] += arr[i][1];
  //       } else {
  //         arr[i][0] = arr[i][1];
  //         combinedArr.push(arr[i][0])
  //       }
  //     }
  // }
  // console.log(combinedArr);
  return objs.reduce((curr, accum) => {
    for(const key in curr) {
      if(key in accum) {
        accum[key] += curr[key];
      } else {
        accum[key] = curr[key];
      }
    }
    return accum;
  });
}

module.exports = { zip };
