// given str =abc ;

function reverseString(str){
    // using 2 pointer to track element;
    //using temp varible for swapping;
    let strArr =str.split('');
    console.log(strArr);
    
    let left=0;
    let right =strArr.length-1;
    let temp;
    while(left<right){
        if(strArr[left]!==strArr[right]){
           temp=strArr[left];
           strArr[left]=strArr[right];
           strArr[right]=temp;
        }
        left++;
        right--;
    }
    const newStr= strArr.join('');
    return newStr;
}

const result =reverseString("abc");
console.log(result);
