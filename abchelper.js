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

function assessAnswer(userLetter, otherLetter) {
    return getPositionInAbcArray(userLetter) > getPositionInAbcArray(otherLetter) ;
}

function getPositionInAbcArray(letter) {
    return abcArray.indexOf(letter);
}

/*

testLetterPosition();
testLetterPosition();

function testLetterPosition(){
    var myLetterArray = sendLetters();
    console.log(myLetterArray[0] + ' is ' + getPositionInAbcArray(myLetterArray[0]));
    console.log(myLetterArray[1] + ' is ' + getPositionInAbcArray(myLetterArray[1]));
}

*/

$(document).ready(function() {

    testLetterPosition();
    testLetterPosition();

    var sentArray = sendLetters();

    $('#letterOne').text(sentArray[0]);
    $('#letterTwo').text(sentArray[1]);

    function userCorrect() {

        $('#letterOne').on('click', function() {
            return assessAnswer($('#letterOne').html(), $('#letterTwo').html());
        })

        $('#letterTwo').on('click', function() {
            return assessAnswer($('#letterTwo').html(), $('#letterOne').html());
        })

        return false;
    }

    $('#letterOne').on('click', function() {
        assessAnswer($('#letterOne').html(), $('#letterTwo').html());
    })
    $('#letterTwo').on('click', function() {
        assessAnswer($('#letterTwo').html(), $('#letterOne').html());
    })

});
