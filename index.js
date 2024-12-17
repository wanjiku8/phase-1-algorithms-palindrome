function isPalindrome(word) {
  // Reverse the string
  const reversedWord = word.split("").reverse().join("");

  // Check if the reversed string matches the original word
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Take the input word
  - Split the word into an array of characters
  - Reverse the array of characters
  - Join the reversed array back into a string
  - Compare the reversed string to the original word
  - If they are equal, return true; otherwise, return false
*/

/*
  Explanation:
  - A palindrome reads the same forwards and backwards.
  - To determine if a word is a palindrome:
    - Reverse the word using `split`, `reverse`, and `join`.
    - Compare the reversed word to the original word.
    - If they match, it is a palindrome (return true); otherwise, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;

