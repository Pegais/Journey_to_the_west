// Problem Description

// Print first 5 odd numbers i.e. 1, 3, 5, 7, 9 using concatenation operator ( + )


// Output Format

// Print first five odd numbers separated by space.


// Example Output

// 1 3 5 7 9

function main(n){
    let arr=[];
    for(let i=1;i<=n; i++){
        if(i%2!==0){
            console.log('odd number :',i);
            arr.push(i)
            
        }
    }
    console.log(arr.join(' '));
    
}
main(10)