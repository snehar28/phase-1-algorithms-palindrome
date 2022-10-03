function isPalindrome(word) {
  // Write your algorithm here
  if (typeof(word) === "string") {
    for (let i = 0; i < word.length; i ++) {
      if (word[i] != word[word.length - (i+1)]) {
        if (word[i] === word[word.length - (i+1)]) {
          i ++;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }
}

/* 
  Add your pseudocode here:
  d - Check if word is string
  d - make word an array
  d - For each letter in the word
  d - let i = 0
  check if word[i] === word[length of array - (i+1)]
  i += 1
  if word[i] = word[length of array - (i+1)]
  return true
  else return false

*/

/*
  Add written explanation of your solution here
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
