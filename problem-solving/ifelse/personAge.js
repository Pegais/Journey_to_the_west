// Problem Description

// Given age of a person, Categorise it based on age.
// Category is given below :
// if age is in range of 0 to 12 then category is "Child",
// Otherwise if age is in range of 13 to 19 then category is "Teenager",
// Otherwise if age is in range of 20 to 40 then category is "Young",
// Otherwise if age is in range of 41 to 60 then category is "Middle-Aged",
// Otherwise if age is more than 60 than category is "Senior-Citizen"

// Note : Intention of this problem is to give you intuition of if-elseif, try to solve this problem using else-if.


// Problem Constraints

// 0 <= age <= 150


// Input Format

// Single value denoting age of a person.

// Output Format

// According to category of age, print statement in single line.


// Example Input

// Input 1 :
// 48

// Input 2 :
// 72


// Example Output

// Output 1 :
// Middle-Aged

// Output 2 :
// Senior-Citizen


// Example Explanation

// Explanation 1 :
// Age is 48, category for 48 is "Middle-Aged"

// Explanation 2 :
// Age is 72, category for 72 is "Senior-Citizen"
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
  let age =Number(inputs[0]);

  if(age>0 && age<=12){
      console.log("Child");
  }else if(age>12 && age <=19){
      console.log("Teenager");

  }else if(age>19 && age<=40){
      console.log("Young");

  }else if(age>=41 && age <=60){
      console.log("Middle-Aged");

  }else if(age>60){
      console.log("Senior-Citizen");

  }
}