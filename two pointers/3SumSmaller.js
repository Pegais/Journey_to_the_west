// Given an array of integers nums and an integer target, return the number of index triplets (i, j, k) with:
// i < j < k
// nums[i] + nums[j] + nums[k] < target
// Your job: count how many triplets have a sum strictly less than the target.
// Example:
// Input: nums = [-2,0,1,3], target = 2
// Output: 2

// Explanation:
// The two triplets are:
// (-2, 0, 1)  = -1  < 2
// (-2, 0, 3)  =  1  < 2


// Constraints:
// n ≤ 1000
// Values can be negative or positive
// Must be faster than O(n³)

// ********************************************************************************************************************************************

//NOTE: in this question we need the sum < target and any range between right -left will be valid for it.
// NOTE: count+=(right-left)


// lets write the 3 sum template;

function workingWithThreeSumAlgo(arr,target){
    //we need anchor , left pointer and right pointer;
    if(arr.length===0){
        return 0
    }
    let count =0;
    //shorting the array
    arr.sort((a,b)=>a-b);
    // in this question we need count of how many triplet give sum less than the target
    for (let i=0;i<arr.length-2;i++){

       let left =i+1;
       let right=arr.length-1;
        //some conditional calculation will happen when we walk the pointer;
        while(left<right){
 
            //walking the pointer
            //condtional checks like sum ===target or sum<target or closest sum;
            let sum =arr[i]+arr[left]+arr[right];
            if(sum<target){
                // now if sum is less than target,
                // all combination between 
                count=count+(right-left);
                left++;
            }else{
                right--;
            }
        }
    }
    return count;
}

const result = workingWithThreeSumAlgo([-2,0,1,3],2);
console.log(result);
