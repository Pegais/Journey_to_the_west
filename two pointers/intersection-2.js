// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


var intersect = function (nums1, nums2) {
    //two pointer algo 
    // sorting required;

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);


    let nums1Pointer = 0;
    let nums2Pointer = 0;
    let result = [];
    console.log(nums1);
    console.log(nums2);


    while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
        if (nums1[nums1Pointer] === nums2[nums2Pointer]) {
            console.log(nums1[nums1Pointer]);

            result.push(nums1[nums1Pointer]);
            nums1Pointer++;
            nums2Pointer++;
        }
        else if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
            nums1Pointer++;
        } else {
            nums2Pointer++
        }
    }
    console.log(result);

    return result


};
// console.log(intersect([4,9,5],[9,4,9,8,4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));

//dry run
/**
 * num1pointer =0; nums1=1 ,nums2=2 at 0th index;
 * nums1pointer =1; nums1=1, nums2=2, at oth index; 1<2 ; 
 * nums1pointer =2; nums1=2=== nums2=2  ; pointer of num1 =3 and num2 =1;
 * 
 */
