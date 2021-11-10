// Enkripsi “Square Code” adalah sebuah bentuk enkripsi dengan
// menghilangkan spasi dari kalimat dan menuliskannya dalam bentuk
// kotak. Sebagai contoh kalimat “if man was meant to stay on the
// ground god would have given us roots” memiliki 54 karakter (tanpa
// spasi), maka dituliskan dalam bentuk kotak dengan 7 baris dan 8
// kolom.
// Pesan dienkripsi dengan cara membaca tulisan dari atas
// ke bawah, dari kiri ke kanan. Untuk contoh pesan
// disamping menjadi:
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes
// aohghn sseoau
// Input Output
// haveaniceday hae and via ecy
// feedthedog fto ehg ee dd
// chillout clu hlt io
// Buatlah sebuah fungsi enkripsi yang menerima masukan pesan dan
// mengembalikan nilai pesan yang sudah dienkripsi.


function encryptSquare(text){
    let newText = ''
    let newWords = []

    trimmed = text.split(' ').join(''); //get text without spaces
    row = Math.round(Math.sqrt(trimmed.length)); //row is square root of chars length that rounded
    col = Math.ceil(trimmed.length/row); // column is rounded up 

    for(i=0;i<col;i++){
        // Create new words from every column of the square
        newWords[i] = '';
        for(j=i;j<trimmed.length; j += col){
            if(j < trimmed.length){
                newWords[i] += trimmed[j];
            }
        }
        // Asign created words to new text with space as separator
        newText += newWords[i] + ' '
    }
    return newText;
}

encrypted1 = encryptSquare("haveaniceday");
encrypted2 = encryptSquare("feedthedog");
encrypted3 = encryptSquare("chillout");

console.log(encrypted1)
console.log(encrypted2)
console.log(encrypted3)

function descryptSquare(text){
    let returnedText = ''
    returnedWords = ''
    let splittedText = text.split(" ")

    for(i=0; i<splittedText[0].length;i++){

        returnedWords = ''

        for(j=0;j<splittedText.length;j++){
            if(splittedText[j][i] !== undefined){
                returnedWords += splittedText[j][i]
            }
        }

        returnedText += returnedWords;
    }
    return returnedText
}

descrypted1 = descryptSquare("hae and via ecy");
descrypted2 = descryptSquare("fto ehg ee dd");
descrypted3 = descryptSquare("clu hlt io");

console.log(descrypted1)
console.log(descrypted2)
console.log(descrypted3)