// Problem Description

// Print the following pattern in output
// **********
// *        *
// *        *
// **********



function main(n) {
  // Write your code here
  // Use console.log to output the result
  for(let i=1;i<=n;i++){
      if(i===1 || i===n){
          for(let j=1;j<=10;j++){
          process.stdout.write("*")
          
        }
    }else if(i>1 && i<n){
        process.stdout.write("*")
       for(let space=1;space<9 ;space++){

           process.stdout.write(" ")
        }
        process.stdout.write("*")
    }

      
      console.log('')
  }

}

main(4)