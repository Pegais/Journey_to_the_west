// Print the following pattern in output
//  *
// * *
//  *

/**
 * 
 * 1 space 1star 1spcae
 * 1star 1space 1star
 * 1space 1star 1space
 */
function main(n) {
    for (let i = 1; i <= n; i++) {
        let mid = Math.floor(n / 2 + 1);

        if (i === mid) {
            for (let j = 1; j <= n; j++) {

                if (j === mid) {

                    process.stdout.write(" ")
                } else {
                    process.stdout.write("*")

                }

            }
        } else {
            for (let j = 1; j <= n-1; j++) {

                if (j === mid) {

                    process.stdout.write("*")
                } else {
                    process.stdout.write(" ")

                }

            }


        }
        console.log('')
    }


}
main(3)