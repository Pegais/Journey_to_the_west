
// ✅ SLIDING WINDOW PROBLEM #1 (New)
// LeetCode 904 — Fruit Into Baskets

// This is the “at most 2 distinct numbers” version but with a twist (real interview favorite).

// 🍎 Problem Statement
// You are given an integer array fruits where each element is a type of fruit.
// You have two baskets.
// Each basket can hold only 1 type of fruit, but unlimited quantity.
// You must pick a continuous subarray of fruits using at most two fruit types.
// Return the maximum number of fruits you can pick.

// Input: fruits = [1,2,1]
// Output: 3
function twoBasket(fruits,k){
    // console.log(fruits.length,"array length");
    
    //ledger and left pointer of window 
    let left=0;
    let ledger={};
    let maxLen=0 //noting the max subarray length
    for(let right=0;right<fruits.length;right++){
        let rightFruit =fruits[right];
        //check and write in ledger;
        ledger[rightFruit]= (ledger[rightFruit] || 0) + 1;


        //wrting failing conditon and shrinking the window
        while(Object.keys(ledger).length>k){
            
            // console.log(Object.keys(ledger));
            
            ledger[fruits[left]]=ledger[fruits[left]]-1;
            if(ledger[fruits[left]]===0){
                delete ledger[fruits[left]];
            }
            left++;
        }
        // console.log(maxLen);
        
        maxLen=Math.max(maxLen,right-left+1)
    }
    return maxLen;
}

const result =twoBasket([1,2,1],2);
console.log(result);
