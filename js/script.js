// Take in two strings
// Return true if both strings contain the same characters with the same counts, even if they are in a different order
// Return false otherwise

// Input:
const s = 'anagra';
const t = 'nagara';

// Output: true

const validAnagram = (str1, str2) => {
  const s = str1.split('').sort().join();
  const t = str2.split('').sort().join();

  return s === t
}

console.log(validAnagram(s, t));