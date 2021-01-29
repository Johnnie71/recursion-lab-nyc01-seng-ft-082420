// Code your solution here!

function printString(myString) {
  console.log(myString[0])
  
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    };
  };


  function reverseString(string){

    if(string.length < 2){
        return string;
    } else {
        return reverseString(string.substring(1)) + string[0];
    }
  };

   
 function isPalindrome(string) {

    if(string.length <= 1){
      return true
    }
     
    let firstLetter = string[0];
    let lastLetter = string[string.length - 1];

    if(firstLetter === lastLetter){

      let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);

      return isPalindrome(stringWithoutFirstAndLastLetters);

    } else {
      return false;
    };

  };

  function addUpTo(myArray, index){
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  };

  function maxOf(array){
    if(array.length === 1){
      return array[0];
    } else {
      return Math.max(array.pop(), maxOf(array));
    };
  };

  function includesNumber(array, element) {
    if(!array.length){
      return false;
    } else if(array[0] === element) {
      return true;
    } else {
      return includesNumber(array.slice(1), element)
    }
  }

