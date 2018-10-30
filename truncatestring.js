//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//if num is same length or longer return string without ... for example truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length <= num){ 
    return str;
  } else{
  return str.slice(0 , num) + "...";
  }
}