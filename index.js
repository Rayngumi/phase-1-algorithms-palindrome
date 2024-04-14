function isPalindrome(word) {
  const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return cleanWord === cleanWord.split("").reverse().join("");
}

/* 
  Pseudocode:
  1. Define a function to check if a word is a palindrome:
    a. Remove all non-letter characters from the input string.
    b. Convert the cleaned string to lowercase.
  2. Assign the cleaned string to a variable.
  3. Reverse the cleaned string.
  4. If the reversed string is equal to the original, return true; otherwise, return false.
*/

/*
This function operates in four main steps:

1. Removal of non-letter characters: The function utilizes a regular expression to eliminate any characters from the input string that are not letters, ensuring only alphabetic characters remain.
   
2. Lowercase conversion: After cleaning, the function converts the resulting string to lowercase. This ensures case-insensitive comparison, treating uppercase and lowercase letters as equal.

3. Reversal comparison: To determine if the word is a palindrome, the cleaned string is compared with its reversed version. This is achieved by splitting the string into an array of characters, reversing the order of the array, and then joining the characters back into a string.

4. Palindrome check: If the cleaned word matches its reversed counterpart, the function returns true, indicating that the word is a palindrome. Otherwise, it returns false, indicating that the word is not a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
