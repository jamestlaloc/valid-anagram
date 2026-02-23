// Take in two strings
// Return true if both strings contain the same characters with the same counts, even if they are in a different order
// Return false otherwise

// Input:
const s = 'anagram';
const t = 'nagaram';

// Output: true

const validAnagram = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  }

  const arr = str2.split("");

  for(let i = 0; i < str1.length; i++) {
    let foundIndex = -1;

    for(let j = 0; j < arr.length; j++) {
      if(str1[i] === arr[j]) {
        foundIndex = j
        break;
      } 
    }

    if(foundIndex === -1) {
      return false;
    }

    arr.splice(foundIndex, 1);
  }
  return true;
}

console.log(validAnagram(s, t));