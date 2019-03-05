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

function accessAnswer(userLetter, otherLetter) {
    return getPositionInAbcArray(userLetter) > getPositionInAbcArray(otherLetter) ;
}

function getPositionInAbcArray(letterOne, letterTwo) {

}

$(document).ready(function() {
    var sentArray = sendLetters();

    $('#letterOne').text(sentArray[0]);
    $('#letterTwo').text(sentArray[1]);

    function userCorrect() {

        $('#letterOne').on('click', function() {
            return accessAnswer($('#letterOne').html(), $('#letterTwo').html());
        })

        $('#letterTwo').on('click', function() {
            return accessAnswer($('#letterTwo').html(), $('#letterOne').html());
        })

        retur false;
    }

    $('#letterOne').on('click', function() {
        accessAnswer($('#letterOne').html(), $('#letterTwo').html());
    })
    $('#letterTwo').on('click', function() {
        accessAnswer($('#letterTwo').html(), $('#letterOne').html());
    })

});
