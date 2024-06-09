const repeatString = function(word, reps) {
    let final = '';
    if (reps < 0) return 'ERROR';
    for (i = 0; i < reps; i++) {
        final += word;
    }
    return final;
};
console.log(repeatString('goodbye', -1))
// Do not edit below this line
module.exports = repeatString;
