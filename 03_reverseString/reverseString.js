const reverseString = function(gnirts) {
    let reverso = "";
    for (var i = gnirts.length - 1; i >= 0; i--) {
        reverso += gnirts[i];
    }
    return reverso;
}

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
