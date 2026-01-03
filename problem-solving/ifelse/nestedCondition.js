// Given the number N, Categorise the number according to following condition :
// 1. Odd-Positive
// 2. Odd-Negative
// 3. Even-Positive
// 4. Even-Negative

// Note : Intention of problem is to teach you Nested If-Else, so try to solve this problem using nested if-else


// Problem Constraints

// -10000 <= N <= 10000 except 0


// Input Format

// Take Number in single line.


// Output Format

// Print the statement, according to number N in single line.


// Example Input

// Input 1 :
// 15

// Input 2 :
// -38


// Example Output

// Output 1 :
// Odd-Positive

// Output 2 :
// Even-Negative


// Example Explanation

// Example Explanation 1 :
// N is 15, which is Odd and Positive.

// Example Explanation 2 :
// N is -38, which is Even and Negative.

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
  const n  = Number(inputs[0]);
  if(n>0){
      if(n%2===0){
          console.log("Even-Positive")
      }else{
          console.log("Odd-Positive")

      }

  }else{
      if(n%2===0){
          console.log("Even-Negative")
      }else{
          console.log("Odd-Negative")

      }

  }

}