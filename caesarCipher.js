export default function caesarCipher(str, shift){
    if(shift > 26) shift = shift%26;
    return (str.split("").map((letter) => {
        let newLetter = "";
        if(letter.toLowerCase().charCodeAt(0) !== letter.charCodeAt(0)){
            letter = letter.toLowerCase();
            newLetter = (letter.charCodeAt(0) === 32 ? " " : letter.charCodeAt(0) + shift > 122 ? String.fromCharCode(letter.charCodeAt(0) + shift - 26) : String.fromCharCode(letter.charCodeAt(0) + shift)).toUpperCase();
        }
        else {
            newLetter = letter.charCodeAt(0) === 32 ? " " : letter.charCodeAt(0) + shift > 122 ? String.fromCharCode(letter.charCodeAt(0) + shift - 26) : String.fromCharCode(letter.charCodeAt(0) + shift);
        }
        return newLetter;
    }
    )).join("");
}