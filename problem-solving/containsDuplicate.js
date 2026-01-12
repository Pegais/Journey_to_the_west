// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


var containsDuplicate = function(nums) {
    let ledger ={};
    for (let num of nums){
        if(!ledger[num]){
            ledger[num]=1;
        }else{
            ledger[num]++;
        }
    }
  console.log(ledger);
  
    for (let key in ledger){
        console.log(key);
        
        if(ledger[key]>1){
            return true
        }
    }
    return false;
};

// console.log(containsDuplicate([1,2,3,4]))
// console.log(containsDuplicate( [1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([2,14,18,22,22]))