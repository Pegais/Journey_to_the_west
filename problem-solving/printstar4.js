// Print the following Pattern in Output :
// ******
// *    *
// *    *
// *    *
// ******


/**
 * constant row =n ; that is 5;
 * 1st and 5th row : n+1 stars;
 * 2 to 4th row : star at 1st and n+1 positon in column;
 * 
 */

function main(n){
    for(let i=1; i<=n ; i++){

        if(n%i===0){
            for (let j =1;j<=n+1;j++){
                process.stdout.write("*")
            }
        }else{
            process.stdout.write("*")
            
            // i =2,3,4
            for(j=1;j<=n-1;j++){
                
                process.stdout.write(" ")
                
                
            }
            process.stdout.write("*")
            


        }
        console.log('');
        
    }
}
main(5)