// Problem Description

// Write a program to calculate the percentage (according to marks of a student) and grade (according to the percentage of a student). Five numbers(A, B, C, D & E) represent the marks of a student in 5 subjects which are out of 100. Print the percentage and the grade of the student.

// If percentage >= 90% : Grade A
// If percentage >= 80% but <90 : Grade B
// If percentage >= 70% but <80: Grade C
// If percentage >= 60% but <70: Grade D
// If percentage >= 40% but <60: Grade E
// If percentage < 40%: Grade F


// NOTE: You have to take the lowest integer of the percentage. E.g. 90.8% will be treated as 90%.


// Input Format

// There will be five lines of inputs as following:
// The five lines contain the 5 subject marks of the student in numerical format.


// Output Format

// The first line indicates the percentage in integer format.
// The next line displays the grade in string format.


// Example Input

// 50
// 60
// 70
// 80
// 90


// Example Output

// 70
// C
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main(inputString);
});

function main(inputs) {
    // Write your code here
    // Use console.log to output the result
    let totalmarks = 500;
    let obtainedmarks = 0;
    inputs.forEach((marks) => {
        obtainedmarks += Number(marks);
    })
  
    let percentage = Math.floor((obtainedmarks / totalmarks) * 100);
    if (percentage >= 90) {
        console.log(percentage);
        console.log("A");
    } else if (percentage >= 80 && percentage < 90) {
        console.log(percentage);
        console.log("B");
    }else if(percentage>=70 && percentage<80){
        console.log(percentage);
        console.log("C");

    }else if(percentage>=60 && percentage<70){
        console.log(percentage);
        console.log("D");

    }else if(percentage>=40 && percentage<60){
        console.log(percentage);
        console.log("E");

    }else if(percentage<40){
        console.log(percentage);
        console.log("F");

    }


}