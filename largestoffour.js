// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.




function largestOfFour(arr) {
  let newArray =[0,0,0,0];
  for (let i =0; i < arr.length; i++){
    newArray[i] = arr[i][0];
    for (let j = 0; j < arr.length ; j++) {
      if (newArray[i] < arr[i][j]){
        newArray[i] =  arr[i][j];
      }
      }
    }
    return newArray;
  }