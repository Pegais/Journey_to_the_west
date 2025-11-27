// Question 1 — Sliding Window (shortest subarray with sum ≥ K)

// Input: arr = [2, 1, 3, 2, 4, 3], K = 7
// Output: length of the shortest contiguous subarray whose sum is at least K. If none exists, return 0.

// Example expected output for this input: 2 (because [3,4] or [4,3] etc.)

// working from mental model to code model for sliding window
// Mental model for Sliding Window                                Code model
// Highlighter                                     let left =0;
// Window expansion                            for(let right=0;right<Array.length;right++)
// window Array                                WE DONT TRACK WINDOW Array; WE TRACK THE INDEXES
// sum/count tracker                               sum +=arr[right] or counter
// shrink window                                   sum-=arr[left] ; left ++;
// ledger for distinct                             let freq={};

function shortedSubArray(arr,k){
  
    
    let left=0;
    let sum=0;
    let minLength =Infinity;
    for(let right=0;right<arr.length;right++){
        sum=sum+ arr[right];
       
        
        // now checking if sum>=k;
        while(sum>=k){
            // calculating the minLength of Subarray;
            minLength=Math.min(minLength,right-left+1);
            // why using Math.min() because Math.min() gives minimum of the two value being compared;
        
            
            sum= sum-arr[left];
            left++;
            
            // in the above 2 lines; we are shrinking the window from left and shifting the highlighter ;
        }
    }
    return minLength===Infinity?-1:minLength;
}

const result=shortedSubArray([2, 1, 3, 2, 4, 3],7);
console.log(result);



