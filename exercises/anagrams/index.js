// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function removeSpaces(string) {
  //splice array to remove spaces
  let newArr = string.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== " ") {
      i++;
    } else newArr.splice(i, 1);
  }
  return newArr.join("");
}

function anagrams(stringA, stringB) {
  //first check if the length are equal
  if (stringA.length !== stringB.length) return false;

  //remove spaces
  strOne = stringA.split(" ").join("").split("");
  strTwo = stringB.split(" ").join("").split("");

  //   store the string in an array

  console.log(strOne);
  console.log(strTwo);
  //use loop to check if the letters in one are in the otherat least once
  let numMatches = 0;
  for (let i = 0; i < strOne.length; i++) {
    for (let j = 0; j < strTwo.length; j++) {
      if (strOne[i] === strTwo[j]) {
        console.log(`compare ${strOne[i]} and ${strTwo[j]} match`);
        i++;
        numMatches++;
      } else {
        console.log(`compare ${strOne[i]} and ${strTwo[j]} different`);
      }
    }
  }
  console.log(`Match: ${numMatches} length:${strOne.length}`);
  if (numMatches === strOne.length) return true;
  else return false;
}

console.log(anagrams("rail safety", "fairy tales"));
// module.exports = anagrams;
