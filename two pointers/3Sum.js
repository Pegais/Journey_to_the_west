// 15. 3Sum

// Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]] such that:
// i != j, j != k, i != k
// nums[i] + nums[j] + nums[k] == 0
// You may return the answer in any order.
// A triplet [a, b, c] is considered unique if there is no other triplet with the same values (even in different order).

// Example 1
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2
// Input: nums = [0,1,1]
// Output: []

// Example 3
// Input: nums = [0,0,0]
// Output: [[0,0,0]]


// **********************************************************************************************************
// we need to understand 3 sum type problems , where we need 3 entities to draw a certain conclusion.
// here we need 3 triplets whose sum ===0.
//from 2 pointer we can have left and right pointer , but missing a third entity.
//Thus we consider a anchor at each index(why?==> because when we fix a anchor , we can have left entity from that index +1 and right entity at end)

// ************************************************************************************************
//Crucial pointers : we need the array to be sorted first.
// we need to make sure we dont repeat the achor twice , for getting unique 3 entity
//our anchor will always be n-3 or from arrays perspective arr.length-2 , as the last 2 index will give us left and right.
//when the target , here sum is too small than 0, we move left pointer ,else right pointer when sum exceeds 0.

function threeSum(arr){
    //now defining our result varaible to store the 3 entity targeting a certain result;
    let result =[];

    // also always remember to sort the array;
    arr.sort((a,b)=>a-b)

    // defining the anchor loops points;
    for(let i=0;i<arr.length-2;i++){
        // we have our anchor endpoints for loop;

        // making sure we skip same achors;
        if(i>0 &&arr[i]===arr[i-1]) continue;

        //defininthe other next pointers;
        let left =i+1;
        let right=arr.length-1;

        while(left<right){
            let anchor =arr[i];
            let sum =anchor +arr[left]+arr[right];


            //this is satisfactory condition according to problem statement
            if(sum===0){
                // this is the actual result we are looking for 
                result.push([anchor,arr[left],arr[right]]);
                left++;
                right--;

                //now making sure we skip duplicate entry from left;
                while(left<right && arr[left]===arr[left-1]) continue;
                //now making sure we skip duplicate entry from right;
                while(left<right &&arr[right]===arr[right+1])continue;
            }else if(sum <0){
                left++;
            }else{
                right--;
            }

        }
    }

    return result;
}


const resultingTriplet =threeSum([0,0,0]);
console.log(resultingTriplet);
