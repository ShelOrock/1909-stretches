// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  let lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let capAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let num = ['0', '1', '2', '3', '4', '5', '6', '7' ,'8' , '9'];
  const alphaShift = shift % 26;
  const numShift = shift % 10;

  const shifted =  str.split('').map((char) => {
    if(lowerAlpha.includes(char)) {

      for(let i = 0; i < lowerAlpha.length; i++) {
        if(lowerAlpha[i] === char) {
          if((i + alphaShift) > lowerAlpha.length) {
            return char = lowerAlpha[(i + alphaShift) - lowerAlpha.length]
          }
          if((i + alphaShift) < 0) {
            return char = lowerAlpha[(i + alphaShift) + lowerAlpha.length]
          }
          return char = lowerAlpha[i + alphaShift];
        }
      }
    } else if(capAlpha.includes(char)) {
      for(let i = 0; i < capAlpha.length; i++) {
        if(capAlpha[i] === char) {
          if((i + alphaShift) > capAlpha.length) {
            return char = capAlpha[(i + alphaShift) - capAlpha.length]
          }
          if((i + alphaShift) < 0) {
            return char = capAlpha[(i + alphaShift) + capAlpha.length]
          }
          return char = capAlpha[i + alphaShift];
        }
      } 
    } else if(num.includes(char)) {
      for(let i = 0; i < num.length; i++) {
        if(num[i] === char) {
          if((i + numShift) > num.length) {
            console.log(numShift);
            console.log(i + numShift)
            return char = num[(i + numShift) - num.length]
          }
          if((i + numShift) < 0) {
            return char = num[(i + numShift) + num.length]
          }
          return char = num[i + numShift];
        }
      }
    } else {
      throw new Error('only numbers and letters');
    }
  }).join('');
  return shifted;
};

module.exports = { encryptString };
