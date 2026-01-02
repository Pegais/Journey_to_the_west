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
  const n =Number(inputs[0]);
  if(n%5==0){
      console.log("Divisible by 5");
  }else{
      console.log("Not divisible by 5")
  }
}