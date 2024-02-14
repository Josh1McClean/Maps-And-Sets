//Quick Question #1
//new Set([1, 1, 2, 2, 3, 4]) //Set(4) { 1, 2, 3, 4 }

//Quick Question #2
'ref' // 👈🏿Answer. An error persists if I don't comment out this line of code: [...new Set("referee")].join("") 

//Quick Questions #3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// {Array(3) => true, Array(3) => false}

//hasDuplicate
function hasDuplicate(array) {
    return new Set(array).size !== array.length;
}
hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

//vowelCount 
function vowelCount(str) {
    const vowels = 'aeiouAEIOU';
    const vowelMap = new Map();

    for (let char of str) {
        if (vowels.includes(char)) {
            char = char.toLowerCase();
            vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
        }
    }
    return vowelMap;
}
vowelCount('Joshua'); // Map(3) {'o' => 1, 'u' => 1, 'a' => 1}
vowelCount('McClean'); // Map(2) {'e' => 1, 'a' => 1}
