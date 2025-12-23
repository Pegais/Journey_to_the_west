// Print the following Pattern in Output :
// ******
// *
// *
// *
// ******


/**
 * we have constant n stars that is 5;
 * we need five row as well
 * row 1 : five star ,o space  
 * row 2 : 1 star , 4space
 * row 3 : 1star , 4space
 * row 4 : 1star, 4space
 * row 5: 5star ,0space
 */


function main(n) {
    for (let i = 1; i <= n; i++) {

        //lets print star
        if (n %i ===0) {
            for (let star = 0; star <= n; star++) {
                process.stdout.write("*")
            }
        } else {
            process.stdout.write("*")

        }
        console.log('');

    }



}

main(5)