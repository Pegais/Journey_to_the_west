// 🧪 Problem: Container With Most Water

// LeetCode 11 – VERY common FAANG interview problem

// You are given an integer array height of length n.

// There are n vertical lines drawn such that the two endpoints of the i-th line are:

// (i, 0)

// (i, height[i])

// The goal is to choose two lines that, together with the x-axis, form a container that holds the maximum amount of water.

// The amount of water the container can store is:
// min(height[left], height[right]) * (right - left)

// Return the maximum amount of water a container can store.
// ✔ Example 1:
// Input:
// height = [1,8,6,2,5,4,8,3,7]

// Output:
// 49



// *************************************************************************************************
// Solution with mental model
// height array; walking through 2 pointer 
//crux is at each pointer we find min height at that left anf right index;
// and we find width that is  =right -left;
// whichever side height is smaller in comparison we move that pointer;


//******************************************************************************************************** */
//left=0 ,right =height.length-1; 
//left =0; right =8;min height =(1,7)=1; width=8-0=8; area =8*1 =8;

//since left height is smaller;
//left pointe will be moved;
// left =1; right =8; minHeight=(8,7)=7 ; width=8-1=7 area=49; 

//since height of right pointer is smaller;
// we move right pointer to left side;
// left=1; right =7; minHeight=(8,3)=3; widht=7-1=6 area=18;

// since right pointer height is smaller;
// we move right ponter to left;
// left=1;right=6; minHeight=(8,8)=8; width=5 area=40;

// now both height at left and right pointer are equal;
//we can move either pointer;
// left =1; right =5; minHeight=(8,4)=4; width =4; area =16;

// again right pointer height is smaller , moving right pointer;
// left =1; right =4; minHeight=(8,5)=5; widht =3; area =15;

// left=1; right=3;minHeight=(8,2)=2; width =2; area =4;

// left =1; right=2; minHeight=(8,6)=6; widht=1; area =8;

//left=1, right=1; pointer collission : stops;

function containerWithMostWater(heightArr){
   
    let leftPointer =0;
    let rightPointer =heightArr.length-1;
    let areaMax=0;
    while(leftPointer<rightPointer){
        let minHeight =Math.min(heightArr[leftPointer],heightArr[rightPointer]);
        let width =rightPointer-leftPointer;
        area=minHeight*width;
        console.log(area,"calculated at every loop");
        
        areaMax=Math.max(areaMax,area);
        console.log(areaMax,"in every loop");
        
        if(heightArr[leftPointer]<heightArr[rightPointer]){
            leftPointer++;
        }else{
            rightPointer--;
        }
    }
    return areaMax;
}

const result= containerWithMostWater([1,8,6,2,5,4,8,3,7]);
console.log(result);
