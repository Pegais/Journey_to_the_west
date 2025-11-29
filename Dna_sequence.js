// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that
//  occur more than once in a DNA molecule. You may return the answer in any order.

 

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either 'A', 'C', 'G', or 'T'.

// ---------------------------------------------------------------------------------------------------------


//This is a fixed sliding window problem, where each time we scan through a window, window will have ten elements;
// example : input = AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT
// now highlister left is at index =0;
// whereas right points to window at index 0 in starting like a magnifying glass;
// so at index 0 : right points : AAAAACCCCC : this whole sequence;
// index:   0-9   → "AAAAACCCCC"
// index:   1-10  → "AAAACCCCCA"
// index:   2-11  → "AAACCCCCAA"
// index:   3-12  → "AACCCCCAAA"
// index:   4-13  → "ACCCCCAAAA"
// index:   5-14  → "CCCCCAAAAA"
// index:   6-15  → "CCCCAAAAAC"
// everytime we move the magnifying glass, that is right indicator, we check wether the 10 sequence exist in ledger;

// HOW MANY WINDOW WE HAVE IN THIS FIXED WINDOW;
// IF DNA LENGTH IS n , we have : n-10+1;
// now create ledger ;
// loop from i to dna.length-10;
// for each loop extract a substring;window= dna.substring(i,i+10);
//add in ledger ; ledger[window]=(ledger[window]||0)+1;

function dnaSequence(dna,k){
    // we dont require left of window to move, because window is fixed ,we dont need shrinking;
    let ledger={};
    for(let right =0; right<dna.length-k;right++){
        // now creating a substring of dna;
        const subDna = dna.substring(right,right+k);
        // than wrting in ledger all sequnce of dna;
        ledger[subDna]=(ledger[subDna]||0)+1;
    }
    // now counting the values of subdna greate than 1;
    const result=[];
    for (let dna in ledger){
        if(ledger[dna]>1){
            console.log(dna);
            
            result.push(dna);
        }
    }
    return result;
}

const result =dnaSequence("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",10);
console.log(result);
