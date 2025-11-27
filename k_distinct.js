// Sliding window Algorithm
// Question: array =[1,2,1,2,3,2,2];
//k=2;
// Find the length of the longest window that has at most k distinct number;


// Mental Model;
//highlighter/left=0; start index of our window;
// right of window ;starts at 0 moves to the end of the given array;
// we need a ledger :
// to keep track of the number at a given window in ledger : 
//                      if number at window not in ledger :it means its unique;(distinct =1)and  write number in ledger, 
//     right moves the window again;              
//    check if number at window not unqiue , update the ledger counts;
// if distinct number >k;
// shrink the window from left; 
// thus number at the left window needs to be removed or its count decreased in ledger;
// if the count becomes zero, delete the number in ledger ;
// continue until right reaches end;

// Code model;
// let left =0;
// traversing number in window for(let right =0; right<arr.length;right++);
//checks number at the right window;
// let rightNum =arr[right];
//check if number is in ledger;
//if(!ledger[rightNum]){
// //its distinct ; distinct ++;
// }
// ledger[rightNum]=(ledger[rightNum]||0)+1; check if not inledger, write with count 1 as we encountered first time;

//now check k distinct condition;
// while(distinct>k){};
// shrink the window from left ; and modify the ledger for leftNum at left window;
// let leftNum =arr[left];
// descresing count in ledger; ledger[leftNum]=ledger[leftNum]-1;
// countinue decreaing util the above while condition are met;
// if ledger counts become zero ; if(ledger[leftNum]===0){delete ledger[leftNum]};
// maxlen =Math.max(maxlen,right-left+1);

function checkLongestWindow_k_distinct(arr,k){
    let left =0;
    let maxLen=0;
    let ledger={};
    let distinct=0;
    for(let right=0;right<arr.length;right++){
        //number in  focus currently in window;
      let numAtRight=arr[right];

      console.log("Number focused in window  :",arr[right]);
      //checking in ledger for this number in focus in window;
      if(!ledger[numAtRight]){
          console.log("this number not in ledger :",numAtRight);
        distinct++;
        console.log("since not in ledger, its unique",distinct,);
      }
      // if not in ledger, write the number in ledger with count;
      ledger[numAtRight]=(ledger[numAtRight]||0)+1;
      console.log("Element in ledger :",ledger);
      

      //Now checking the disticnt and K relation;
      while(distinct>k){
        // then shrink the window from left and update the number at left window in ledger;
        let numAtLeft =arr[left];
        
            ledger[numAtLeft]=ledger[numAtLeft]-1;
            console.log("updated the ledger :",ledger,"with the number at left window :",arr[left],"at index :",left);
        
        if(ledger[numAtLeft]===0){
            //if the count comes to 0; we delete the key in ledger itself;
            delete ledger[numAtLeft];
            console.log("element deleted in ledger :",ledger);
            distinct--;
        }
        left++;    
    }
      maxLen=Math.max(maxLen,right-left+1);
    }
   return maxLen;
}

const result =checkLongestWindow_k_distinct([1,2,1,2,3,2,2],2)
console.log(result,"this is final result");
