/**
 * 
 *    * * * * *
 *    *       * 
 *    * * * * *    
 *    *
 *    *      
 */


function main(n) {
    let mid = Math.floor(n / 2 + 1);
    for (let i = 1; i <= n; i++) {

        //printing first row all stars
        if (i === 1) {

            for (let j = 1; j <= n; j++) {
                process.stdout.write("*")
            }
        } else if (i === mid) {
            for (let j = 1; j <= n; j++) {
                process.stdout.write("*")
            }
        } else if (i > 1 && i < mid) {
            process.stdout.write("*")
            for (let space = 1; space < n - 1; space++) {
                process.stdout.write(" ")

            }
            process.stdout.write("*")


        } else {
            process.stdout.write("*")

        }
        console.log('')
    }
}
main(5);