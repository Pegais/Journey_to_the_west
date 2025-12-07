// jahaj
// left= 0 => j, right=length-1=4;=>j;
//left++ => 1=> a , right=a;3;

function palindrome(str){
    // solving this with 2 pointers;
    //
    leftPointer =0;
    rightPointer =str.length-1;
    while(leftPointer<rightPointer){
        console.log("left pointer: ",str[leftPointer],"and right pointer: ",str[rightPointer]);
        

        //false condtion 
       if( str[leftPointer] !==str[rightPointer]){
        return false;
        }
           leftPointer++;
           rightPointer--;
    }
    return true;
}

const result = palindrome("puppup");
console.log(result);
