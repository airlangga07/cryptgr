// create a function to generate an array of letters
function generateChars() {
  let a = 'A'.charCodeAt(0);
  let z = 'Z'.charCodeAt(0);
  const arr = [];

  while (a <= z) {
    arr.push(String.fromCharCode(a));
    a++;
  }
  return arr;
}

const chars = generateChars();

// define the letter
const letter = 'E';

// define the shift
const shift = 23;

const pos = chars.indexOf(letter) + 1;
const decrypt_post = (pos + shift) % 26;
console.log(letter + " = " + chars[decrypt_post]);