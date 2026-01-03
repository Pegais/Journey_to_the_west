// Problem Description

// Write a program to input from user an integer(n) representing the rating of a person on a platform.

// You have to print the category of that person.

// If the rating is greater than or equal to 2100 then that person is "grand master".
// If the rating is greater than or equal to 1900 then that person is "candidate master".
// If the rating is greater than or equal to 1600 then that person is "expert".
// If the rating is greater than or equal to 1400 then that person is "pupil".
// If the rating is smaller than 1400 then that person is "newbie".
// NOTE: Print all the chars of the category of the person in lowercase if rating is odd otherwise print in UPPERCASE


// Problem Constraints

// 1000 <= n <= 2500



// Input Format

// One line containing an integern.



// Output Format

// A string representing the category of the person.



// Example Input

// Input 1:

// 1659
// Input 2:

// 2100


// Example Output

// Output 1:

// expert
// Output 2:

// GRAND MASTER


// Example Explanation

// Explanation 1:

// Clearly, 1659 is odd and is in the range of expert.
// Explanation 2:

// Clearly, 2100 is even and is in the range of grand master.

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
  let n  =Number(inputs[0]);
 if(n%2===0){
    if (n >= 2100) {
         console.log("GRAND MASTER");
     } else if (n >= 1900 && n < 2100) {
         console.log("CANDIDATE MASTER");

     } else if (n >= 1600 && n < 1900) {
         console.log("EXPERT");

     } else if (n >= 1400 && n < 1600) {
         console.log("PUPIL");

     } else if (n < 1400) {
         console.log("NEWBIE");

     }
 }else{
     if (n >= 2100) {
         console.log("grand master");
     } else if (n >= 1900 && n < 2100) {
         console.log("candidate master");

     } else if (n >= 1600 && n < 1900) {
         console.log("expert");

     } else if (n >= 1400 && n < 1600) {
         console.log("pupil");

     } else if (n < 1400) {
         console.log("newbie");

     }
 }

}