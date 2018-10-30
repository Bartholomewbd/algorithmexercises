//Your task is to make function, which returns the sum of a sequence of integers.

//The sequence is defined by 3 non-negative values: begin, end, step.

//If begin value is greater than the end, function should returns 0


const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  sum = 0
  if (begin > end) { return 0;}
  for( i = begin; i <= end; i += step){
    console.log(i);
  sum += i;
  }
  return sum;
  
};