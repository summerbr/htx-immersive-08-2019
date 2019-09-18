function madLib(name, subject) {
    return name + "'s favorite subject in school is " + subject + "."
}

function tipAmount(bill, service) {
    switch (service) {
        case service === fair:
        var goodTip = bill * 15%;
        break;
        case service === good:
        var greatTip = bill * 20%;
        break;
        case service === bad:
        var fairTip = bill * 10%;
        break;
    }
}


// function printBox (width, height, marker = '*') {
//     var output;
//     var row = '';
//     for (var i = 0; i < width; i++) {
//         row += marker;
//     }
//     var gap = '';
//     for (var i = 0; i < width - 2; i++) {
//         gap += '';
//     }
//     var column = marker + gap + marker;

//     for (var i =0; i < height; i++) {
//         switch (i) {
//             case 0:
//                 case height - 1:
//                     console.log(row);
//                     break;
//                 default:
//                     console.log(column);
//                     break;
//         }
//     }   
// }

function leetSpeak(word) {
    var capitalize = word.toUpperCase();
    var splitWord = capitalize.split('');
    var convertedWord = [];
    splitWord.forEach(letter => {
        convertedWord.push(letterReplace(letter));
    })
    return convertedWord.join();
}
function letterReplace(letter) {
    switch (letter) {
        case 'A':
            return 4;
        case 'E':
            return 3;
        case 'G':
            return 6;
        case 'I':
            return 1;
        case 'O':
            return 0;
        case 'S':
            return 5;
        case 'T':
            return 7;
        default:
            return letter
    }
}

