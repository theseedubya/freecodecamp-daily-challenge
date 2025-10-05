function digitsOrLetters(str) {
 const digits = str.match(/[\d]/g).length
 const letters = str.match(/[A-z]/g).length

console.log(digits,letters)
return letters == digits ? "tie" : letters > digits ? "letters" : "digits";
}

console.log(digitsOrLetters("abc123"))
