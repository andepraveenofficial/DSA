// 07 Group Anagrams

/*
Problem : Group Anagrams

Given an array of strings, group the anagrams together. You can return the answer in
any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or
phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters

*/

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

let hashMap = new Map();

for (let word of strs) {
  // console.log(word);
  let sortedWord = word.split("").sort().join("");
  console.log(sortedWord);

  hashMap.has(sortedWord)
    ? hashMap.get(sortedWord).push(word)
    : hashMap.set(sortedWord, [word]);

  console.log(hashMap);
}

console.log("---------");

/*

// Convert Map to Array
let result = Array.from(hashMap.values());
console.log(result);

*/

const groupAnagrams = [...hashMap.values()];

console.log(groupAnagrams); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

console.log("===========");
