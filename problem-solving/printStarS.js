// Print the following Pattern in Output :
// ******
// *
// *
// ******
//      *
//      *
// ******

/**
 * 7 rows , 6 stars  , n row an n-1 star;
 * 1st and 7 row has 6 stars;
 * 
 */

function main(n){
         // process.stdout.write("*")
         let mid = Math.floor((n)/2+1);
    for (let i=1;i<=n;i++){
        if(n%i===0){
            for(let j=1;j<=n-1;j++){

                process.stdout.write("*")
            }
        }else if(i===mid){       
            for(let j=1;j<=n-1;j++){

                process.stdout.write("*")
            }
            
        }else if(i>1 && i<mid){
            process.stdout.write("*")
            
        }else{
            //printing the spaces first and than star at the last;
            for(let space=1; space<n-1;space++){
                process.stdout.write(" ")
                
            }
            process.stdout.write("*")


        }
        console.log('')
    }
}
main(7)