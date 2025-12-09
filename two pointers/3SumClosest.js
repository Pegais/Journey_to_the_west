// 🔥 3SUM Closest — Full Interview-Ready Problem Statement

// Here is the exact, full LeetCode-style statement:

// ✅ Problem: 3Sum Closest
// Given an integer array nums of length n and an integer target,
// find three integers in nums such that the sum is closest to the target.
// Return the sum of the three integers.
// You may assume:
// each input would have exactly one solution (no ties)
// constraints allow sorting + two-pointer solution
//********************************************************************************** */
// Example 1
// Input: nums = [-1, 2, 1, -4], target = 1
// Output: 2
// Explanation:
// The sum that is closest to 1 is (-1 + 2 + 1) = 2.
// Example 2
// Input: nums = [0,0,0], target = 1
// Output: 0
/************************************************************************* */

//lets dry run arr=[-1,2,1,-4] target =1;
// sorting =[-4,-1,1,2];
//anchor =arr[index]=-4,left=index+1 = -1,right=2
//sum =-4-1+2 =3
//now sum-target =3-1=2 and closesSum-target=infinity-1 =infinty;
//closestsum =sum=2;
//check sum<target or sum>target=> 2>1=> right--;

// left =-1,anchor=-4, right=1 , sum=4; 
//sum-target =4-1=3 and closestSum-target =2-1 =1
//check 3<1 ; false so closestSum=2;
//3>1==> right--;

//now acnhor moves to index=1; and thus anchor=-1, left=1, right=2;
// sum=-1+1+2=2 ;
//sum-target =2-1=1; closesetSum-target =2-1 =1; thus closest sum remains 2; 
function threeClosestSum(arr,target){
    if(arr.length===0){
        return 0
    }
    //new variable to target closst sum;
    let closestSum=Infinity;


    // now deining our anchor loop
    for(let i=0; i<arr.length-2;i++){
        //no need for checking the anchor repeatation;
        // if(i>0 && arr[i]===arr[i-1]) continue;
        //defining the left and right pointer;
        let left =i+1;
        let right=arr.length-1;
        
        //now walking the pointers;
        while(left<right){
            let sum = arr[i]+arr[left]+arr[right];

            //now checking the condition for closest;
            if(Math.abs(sum-target)<Math.abs(closestSum-target)){
                closestSum=sum;
            }
            //we dont need to check for repated left and right pointer like ;
            // while(left<right && arr[left]===arr[left-1])continue;
            // while(left<right && arr[right]===arr[right+1]) continue;
            if(sum<target){
                left++
            }else if(sum>target){
                right--
            }else{
                return target
            }
        }
    }
    return closestSum
};

const result = threeClosestSum([0,0,0],1);
console.log(result);
