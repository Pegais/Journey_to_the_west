// Problem Description

// Print the following pattern in output

// *****  
// ****  
// ***  
// **  
// *

function main(){
    for (let i=0 ;i<5 ;i++){
        for(let j=i ;j<5;j++){
            process.stdout.write("*");//it prints star in same line
        }
        console.log(" ");
        
    }
}
main()