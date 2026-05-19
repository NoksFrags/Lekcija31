function checkPalindromes(words) {
    for (let word of words) {
        let reversed = word.split('').reverse().join('');
        
        if (word.toLowerCase() === reversed.toLowerCase()) {
            console.log(word + " is a palindrome");
        } else {
            console.log(word + " is NOT a palindrome");
        }
    }
}

checkPalindromes(["radar", "hello", "Kayak"]);