// Problem Description

// Print the following pattern in output

//     *
//    **
//   ***
//  ****
// *****

/**
 * i=5;constant 
 * 4 space and 1 *
 * 3space and 2*
 * 2psace and 3*
 * 1space and 4*
 * 5*
 * 
 * for each row we have n-1 space and i star
 */


function main(n){
   //see for each row we have n-1 space and i star;
   for(let i=1;i<=n;i++){
   
    
     for(let space=1;space<=n-i;space++){
        process.stdout.write(" ");
     }
     for(let star=1;star<=i;star++){
        process.stdout.write("*")
     }
     console.log('')
   }
}
main(5)