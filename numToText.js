/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit nubmers. Can you implement this function in two different ways? One way involves creating an inner helper function (or subroutine), the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str, i , words ) {

  

  var numberToString = function(myStr){
    switch (myStr){
    case '0': 
      return 'zero';
      break;
    case '1': 
      return 'one';
      break;
    case '2': 
      return 'two';
      break;
    case '3': 
      return 'three';
      break;
    case '4': 
      return 'four';
      break;
    case '5': 
      return 'five';
      break;
    case '6': 
      return 'six';
      break;
    case '7': 
      return 'seven';
      break;
    case '8': 
      return 'eight';
      break;
    case '9': 
      return 'nine';
      break;
    default:  
      return myStr;
      break;
    }
  }
  i = i || 0;
  //initialization
  if (i === 0){
    words = str.split(' ');
  }
  
  if (i < words.length ){
  //recursive case
    words[i] = numberToString(words[i]);
    i++;
    return numToText(str, i, words);
    
  } else {
  //base case 
    return words.join(' ');
  }

};
