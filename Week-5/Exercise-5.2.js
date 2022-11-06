function isVowel(char){
    return 'aeiou'.includes(char);
}
function vowelCount(string){
    const result = new Map()
    for(let char of string){
        char = char.toLowerCase();
        if(isVowel(char)){
            if(result.has(char)) 
                result.set(char, result.get(char)+1)
            else result.set(char, 1)
        }
    }
    return result;
}

console.log(vowelCount('Anjali'))