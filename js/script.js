// Take in two strings
// Return true if both strings contain the same characters with the same counts, even if they are in a different order
// Return false otherwise

// Input:
const s = 'anagram';
const t = 'nagaram';

// Output: true

const validAnagram = (str1, str2) => {
  //Checks if both strings have the same length as anagrams would
  if(str1.length !== str2.length) {
    return false;
  }

  // Split str2 into an array so as to modify it
  const arr = str2.split("");

  // Declalre a variable to help determine whether no matches were found if unchanged.
  for(let i = 0; i < str1.length; i++) {
    let foundIndex = -1;
  
  //Checks for charater matches in the array for each character in the sting.
    for(let j = 0; j < arr.length; j++) {
      if(str1[i] === arr[j]) {
        foundIndex = j
        break;
      } 
    }

    // If no matches found, variable is unchanged and returns false.
    if(foundIndex === -1) {
      return false;
    }

    // If matches were found, variable changes to index that it was found in, and removes that element.
    arr.splice(foundIndex, 1);
  }
  // If the code survives the loop, it reaches here and returns truuuuu
  return true;
}

function validAnagram(s, t) {
  if(s.length !== t.length) {
    return false;
  }

  const count = {};

  
}

console.log(validAnagram(s, t));