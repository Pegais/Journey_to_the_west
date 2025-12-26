
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */

/**
 * Key outCome  : if we want comparison of string of prefix : sort the array of strings
 * Sorting arranges all the string into lexoghraphically arranged strings.
 */
var longestCommonPrefix = function (strs) {

    let prefix = ""
    if (strs.length === 0) return prefix;
    console.log(strs.length);
    if(strs.length===1 && strs[0].length===0){
        return prefix
    }
    
    if(strs.length===1 && strs[0].length>0){
        return strs[0];
    }
    strs.sort();


    let refPointer = 0;
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1]
    console.log(firstStr, lastStr);

    while (refPointer < firstStr.length && refPointer < lastStr.length) {


        if (firstStr[refPointer] !== lastStr[refPointer]) {
           return prefix
        }else{
            prefix += firstStr[refPointer];
        }
        refPointer++;

    }

    console.log(prefix);
    return prefix;

}
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// console.log(longestCommonPrefix(["dog","racecar","car"]));

//edge case :
console.log(longestCommonPrefix([""]));

