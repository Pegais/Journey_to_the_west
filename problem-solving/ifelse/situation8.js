// Problem Description

// Take an integer A as input. You have to tell whether A is divible by both 5 and 11 or not.


// Problem Constraints

// 1 <= A <= 109



// Input Format

// The input contains a single integer A.



// Output Format

// Print 1 if A is divisible by both 5 and 11, else print 0.



// Example Input

// Input 1:

//  55 
// Input 2:

//  22 


// Example Output

// Output 1:

//  1 
// Output 2:

//  0 


// Example Explanation

// Explanation 1:

//  55 is divisible by both 5 (5 * 11 = 55) and 11 (11 * 5 = 55).
// Explanation 2:

//  22 is divisble by 11 (11 * 2 = 22),but it is not divisible by 5.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main(inputString);
});

function main(inputs) {
  // Write your code here
  // Use console.log to output the result
  const a = Number(inputs[0]);
  if(a%5==0 && a%11==0){
      console.log(1);
  }else{
      console.log(0);
  }
}