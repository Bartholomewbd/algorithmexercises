// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
Examples


const Go = (num) => {
  str ="";
  for(let i = 0; i < num; i++) {
      str += '-';
  }
  return str
}


// another way 

const Go = (num) => '-'.repeat(num);