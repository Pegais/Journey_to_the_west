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
  const temp = Number(inputs[0]);
   if(temp>=85.0 && temp<=91.0 ){
       console.log("Serious Hypothermia");
   }else if(temp>91.0 && temp<95.0){
       console.log("Mild Hypothermia");
   }else if(temp>=95.0 && temp<=98.0){
       console.log("Normal Temperature");
   }else if(temp>98.0 && temp<=100.0){
       console.log("Mild Fever");
   }else{
       console.log("High Fever")
   }

}