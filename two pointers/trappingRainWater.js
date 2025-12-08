// 1) Full problem statement — Trapping Rain Water (LeetCode 42)

// Problem:
// Given n non-negative integers height[0..n-1] where each integer represents the height of a vertical bar at that index,
// compute how much water can be trapped after raining. Return the total amount of trapped water.
// More simply: Bars form a histogram; between taller bars, water may collect on top of shorter bars. Sum the water units over all indices.
// Input constraints:
// n == height.length
// 0 <= n <= 10^5
// 0 <= height[i] <= 10^5
// Example:
// height = [4,2,0,3,2,5] → total trapped water = 9.

// *************************************************************************************************************************
//WHAT I UNDERSTOOD FROM THE PROBLEM STATEMENT
// so I am an array consisting of height of vertical bar, at each indexes
// now imagining the height of vertical bars as hill heights, so the shorter area between hills will have dip of water.
// so lets imagine 2 people at left and right pointer of array standing at index 0 and index of array.length-1;
// now left person has a flag of leftMax and right person has flag of rightMax;
// they walk towards each other, if they encounter height of hill greater than previous hill height they update the maxheight flag.
// now water dip calculatio will be like minheight between (leftMax,rightMax)-height[at that index];
// core point : if one side of wall is shorter than other the water spills to shorter side;

//************************************************************************************************************************************ */

//DRY RUN 
//LEFTPOINTER =0 
//RIGHTPOINTER=ARRAY.LENGTH-1
//LEFTMAX =0 ,RIGHTMAX=0 
//WATER= min(leftMax -rightMax)-height[index];

// left=0; right=6-1=5;  
//leftMax=arr[left]=> 4 ; rightMax=arr[right]=5;
// water=min(4,5)-4 = 0 ; no dip ;

// checking left height is less than the leftMax ;
// true => left =1; right=5; water=min(4,5)-2 =2;
//or update leftMax= math.max(leftmax,height[left]);
// checking if right height is less than rightMax;
// true => right --; height[right]; water=min(leftMax, righrtMax)-hieght[index];

//******************************************************************************************************************* */

function trappingRainWater(integerArr) {
    if(integerArr.length===0) return 0;
    let left = 0;
    let right = integerArr.length - 1;
    console.log("my current left and right pointer are :", left, right);

    let leftMax = 0;
    let rightMax = 0;
    let TotalWater = 0;

    while (left < right) {
         // now checking the height at left and right side and comparing 
         if(integerArr[left]<integerArr[right]){
            //this is for limiting left side;
            if(integerArr[left]>=leftMax){
                //if height encountered at left pointer is greater than
                // the encountered maxleft hight , update the lefMax height flag;
                    leftMax=integerArr[left];
            }else{
              // if not , we calculcate the wateraccumulated;
              let waterAccumulated =leftMax-integerArr[left];
              TotalWater+=waterAccumulated;
            }
            left++;

         }else{
            // this is for limiting right side;
            if(integerArr[right]>=rightMax){
                //that is if we encountered right pointer height greater than that of existing rightMax height;
                // update the rightMax flag;
                rightMax=integerArr[right]
            }else{
                // update the water accumulated;
                let waterAccumulated =rightMax-integerArr[right];
                TotalWater+=waterAccumulated;
            }
            right--;
         }
    }

    return TotalWater;
}

const result = trappingRainWater([4, 2, 0, 3, 2, 5]);
console.log(result);
