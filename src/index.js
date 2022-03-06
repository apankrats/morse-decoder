const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morse = '';
        result = '';
    for (i = 0; i < expr.length; i = i + 2) {
        if (expr[i] + expr[i + 1] === "00") {
            morse = morse + "*";
        } else if (expr[i] + expr[i + 1] === "10"){
            morse = morse + ".";
        } else if (expr[i] + expr[i + 1] === "11") {
            morse = morse + "-";
        } 
        else if (expr[i] + expr[i + 1] === "**") {
            morse = morse + "*,*";
            i = i + 8;
        }
    }
    morse = morse.replace('****', '*');
    morse = morse.replace('****', '*');
    morse = morse.replace('****', '*');
    morse = morse.replace('****', '*');
    morse = morse.replace('****', '*');
    morse = morse.replace('***', '*');
    morse = morse.replace('***', '*');
    morse = morse.replace('***', '*');
    morse = morse.replace('***', '*');
    morse = morse.replace('***', '*');
    morse = morse.replace('**', '*');
    morse = morse.replace('**', '*');
    morse = morse.replace('**', '*');
    morse = morse.replace('**', '*');
    morse = morse.replace('**', '*');
    morse = morse.split('*');
    console.log(morse);

    // console.log(morse.length);
    // console.log(Object.keys(MORSE_TABLE).length);
    // console.log(Object.values(morse).toString());
    // console.log(Object.keys(MORSE_TABLE).toString());
    // console.log(Object.values(MORSE_TABLE).toString());
    
    

for (let i = 0; i < morse.length; i++ ) {
    if (Object.values(morse)[i].toString() === ","){
        result = result + " ";
    } else {
        for (let k = 0; k < Object.keys(MORSE_TABLE).length; k++) {
            if (Object.values(morse)[i].toString() === Object.keys(MORSE_TABLE)[k].toString()) {
               result = result + Object.values(MORSE_TABLE)[k].toString();
        }
    }
}
}
return result

}




module.exports = {
    decode
}
