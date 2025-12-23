// Print the following Pattern in Output :
// *****
//    *
//   *
//  *
// *****

function main(n){

   for(let i=1; i<=n;i++){

    if(n%i===0){
        for(let j=1;j<=n;j++){

            process.stdout.write('*')
        }
    }else{
        // i =2,3,4
        //3 space , 1star
        //2 space,1star
        //1space,1star
        for(let j=1;j<=n-i;j++){

            process.stdout.write(' ')
        }
        process.stdout.write('*')


    }
    console.log('')
   }
}
main(5)