const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

module.exports.decode = function(expr) {

    // write your solution here
    let decodedString = '';
    let lengthOfExpr = expr.length;
    let j = 10;
    let codedString = '';
    if (lengthOfExpr % 10 !== 0) {
        decodedString = '0';
        return decodedString;
    } else {
        var parth = expr.match(/.{1,10}/g);
        parth.forEach(element => {
            var symbolMorse = "",
                symbol, stringMorse = "";
            if (element == '**********') {
                symbol = " ";
            } else {
                var symbolsBinary = element.match(/.{1,2}/g);
                symbolsBinary.forEach(element => {
                    switch (element) {
                        case '10':
                            symbolMorse = '.';
                            break;
                        case '11':
                            symbolMorse = '-';
                            break;
                        default:
                            break;
                    }
                    stringMorse += symbolMorse;
                });
                symbol = MORSE_TABLE[stringMorse];
            }


            decodedString += symbol;
        });

    }

    return decodedString;

}