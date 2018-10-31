//You are given two arrays and an index.
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.
//Remember to use Read-Search-Ask if you get stuck. Write your own code.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let myArray = arr2.slice()
  for(let x = 0; x< arr1.length; x++){
  myArray.splice(n, 0, arr1[x]);
  n++;
  }
  return myArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);