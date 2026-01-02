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
  let sides =inputs[0];
  let sidesArr =sides.split(' ');
  let side1 =Number(sidesArr[0]);
  let side2 =Number(sidesArr[1]);
  let side3 =Number(sidesArr[2]);

  if(side1===side2 && side1===side3){
      console.log("equilateral");
  }else if (side1===side2 || side1===side3 || side2===side3){
      console.log("isosceles")
  }else{
      console.log("scalene")
  }
}