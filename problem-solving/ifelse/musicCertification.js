// Problem Description

// A programmer for a music company is developing a program to determine the highest level of certification for an album.
// The program needs to follow this table of thresholds for each certification level:


// Minimum albums sold Certification
// 500000 (5*105) gold
// 1000000 (106) platinum
// 10000000 (107) diamond


// Given the albums sold(N) as input, print the certification for the album.


// Problem Constraints

// 1 <= N <= 109


// Input Format

// There is only 1 single line in the input, which is the integer denoting the no. of albums sold.


// Output Format

// Output the certification either diamond, platinum or gold.
// If no certification, print None.


// Example Input

// Input 1:-
// 50
// Input 2:-
// 500000


// Example Output

// Output 1:-
// None
// Output 2:-
// gold



// Example Explanation

// Explanation 1:
// The albums sold (50) is less than all the three condition. So, There is no Certifications, print "None".
// Explanation 2:
// THe albums sold is greater than equal to (5*105) and less than the remaining thresholds.
// So, gold is the highest level of certification. print "gold".
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
  let n = Number(inputs[0]);
  if(n>=500000 && n< Math.pow(10,6)){
      console.log("gold")
  }else if(n >= Math.pow(10,6) && n<Math.pow(10,7)){
      console.log("platinum")

  }else if(n>=Math.pow(10,7)){
      console.log("diamond")
  }else{
      console.log("None")

  }
}