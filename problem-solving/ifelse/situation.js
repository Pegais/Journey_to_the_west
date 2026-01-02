// 

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
  let n =Number(inputs[0]);
  if(n>0){
     if(n%2===0){
         console.log("Number is Positive and Even");
     }else{
         console.log("Number is Positive and Odd");

     }
  }else{
   if(n%2===0){
         console.log("Number is Negative and Even");
     }else{
         console.log("Number is Negative and Odd");

     }
  }

}