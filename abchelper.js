var abcArray = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];

function getRandomLetter() {
    return abcArray[Math.floor(Math.random() * abcArray.length)];
}

function sendLetters() {
    var a = new String("");
    var b = new String("");

    do {
        a = getRandomLetter();
        b = getRandomLetter();
    }
    while (a === b);

    return [a, b];
}

$(document).ready(function() {
    var sentArray = sendLetters();

    $('#letterOne').text(sentArray[0]);
    $('#letterTwo').text(sentArray[1]);

    $('#letterOne').on('click', function() {
        console.log($('#letterOne').html());
    })
    $('#letterTwo').on('click', function() {
        console.log($('#letterTwo').html());
    })

});