function isVowel(char) {
    char = char.toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    }
    return false;
}

const hasMoreVowels = (word) => {
    const wordArr = Array.from(word);
    let vowels = wordArr.filter(char => isVowel(char));
    let consonants = wordArr.filter(char => !isVowel(char));
    if(vowels.length > consonants.length) {
        return true;
    }
    return false;
}

// console.log(hasMoreVowels("moose"));
// console.log(hasMoreVowels("mice"));
// console.log(hasMoreVowels("graph"));
// console.log(hasMoreVowels("Yay"));
// console.log(hasMoreVowels("Aal"));