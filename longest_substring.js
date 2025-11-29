// 395. Longest Substring with At Least K Repeating Characters

// Given a string s and an integer k, return the length of the longest substring of s such,
// that the frequency of each character in this substring is greater than or equal to k.
// if no such substring exists, return 0.
// Example 1:

// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:

// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.


// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 105

// =================================================================================================
// trying the dry run for it;
// s ="ababbc" k=2;
// left =0;
// right =0 ; window=[a];
// checking if the freq :char in substring is greater or equal to k;
// ledger ={};
// intially : ledger={a:1};
// substring: s.substring(left,right+1); (0,1)

// left=0;
// right=1; window=[a,b];ledger={a:1.b:1}; substr=s.suibstring(left,right+1);(0,2)

//left=0; right=2; window=[a,b,a] ; ledger={a:2:b:1}; (0,3);
//checks ledger[number at right index]>=k
// ledger[number at left]--; left =1; substring=(1,3) 

function longestSubStringAtLeast_K_repeat_char(s, k) {
    let left = 0;
    let ledger = {};
    let substr;
    for (let right = 0; right < s.length; right++) {
        let window = s[right];
        ledger[window] = (ledger[window] || 0) + 1;
        substr = s.substring(left, right + 1);
        console.log(substr, "each loop substring");
        console.log(ledger, "each loop");

        // checking the ledger key more than 2 ;



    }
    let sum = 0;
    for (let key in ledger) {
        if (ledger[key] >= 2) {
             sum = sum + ledger[key];
            
             
        }
    }
    return sum;
}
const result = longestSubStringAtLeast_K_repeat_char("ababacb", 3)
console.log(result);
