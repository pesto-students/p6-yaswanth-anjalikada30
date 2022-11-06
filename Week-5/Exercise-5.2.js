function vowelCount(string){
    const vowelMatcher = /[aeiou]/gi ;
    const result = new Map([
        ['a',0],
        ['e',0],
        ['i',0],
        ['o',0],
        ['u',0]
    ])
    for(let char of string){
        char = char.toLowerCase();
        if(char.match(vowelMatcher)){
            result.set(char, result.get(char)+1)
        }
    }
    return result;
}

console.log(vowelCount('Anjali'))