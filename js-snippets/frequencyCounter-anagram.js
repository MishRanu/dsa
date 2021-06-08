/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*
    NOTE Frequency Counter Pattern
    Problem: Find if the two strings are anagram: second can be obtained by rearranging characters of first
    Examples: 'anagram' <-> 'nagaram' true
               'aaz' <-> 'zza' false
               'qwerty', 'qeywrt' true
*/

function validAnagram(first, second) {
    //Compare the length of the two strings. Return false if they are not equal
    if (first.length != second.length) return false;
    // Approach1: Loop through each character in stringA and check indexOf(char) in stringB is non zero

    /* 
    Approach2: 
    1. Loop through each letter in first, make a map 'lookup' letter <-> frequency
    2. Loop through each letter in second, for each letter
        2.1 check if valid frequency in map 'lookup', not zero || undefined
        2.2 decrease frequency in 'lookup'
    */
    const lookup = {};
    for (const letter of first) {
        lookup[letter] = ++lookup[letter] || 1;
    }

    for (const letter of second) {
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;

}


validAnagram('anagram', 'nagaram');
/*
    WRONG SUBMISSION:


    function validAnagram(stringA, stringB){
    //If the length of the two strings not equal return false

    WRONG --> Not sure why ? 
    if(!stringA || !stringB){
        return false;
    }
    if(stringA.length !== stringB.length){
        return false;
    }
    // Approach1: If for each char in stringA there is a char in stringB
    // Approach2: the frequency for each char in stringA matches frequency in stringB
    let mapA = {};
    for(let c of stringA){
        mapA[c] = ++mapA[c] || 1;
    }
    let mapB = {}
    for(let c of stringB){
        mapB[c] = ++mapB[c] || 1;
    }

    WRONG ---> for(let key in stringA) {
        //key would be index, since stringA is array use forof

        if(mapA[key] !== mapB[key]){
            return false;
        }
    }
    return true;
}

*/