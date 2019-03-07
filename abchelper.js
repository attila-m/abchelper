var abcArray = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];

function getRandomLetter() {
    return abcArray[Math.floor(Math.random() * abcArray.length)];
};

function getExerciseLetters() {
    var a = new String("");
    var b = new String("");

    do {
        a = getRandomLetter();
        b = getRandomLetter();
    }
    while (a === b);

    return [a, b];
};

function assessAnswer(userLetter, otherLetter) {
    return getPositionInAbcArray(userLetter) > getPositionInAbcArray(otherLetter);
};

function getPositionInAbcArray(letter) {
    return abcArray.indexOf(letter);
};

/*

testLetterPosition();
testLetterPosition();

function testLetterPosition(){
    var myLetterArray = sendLetters();
    console.log(myLetterArray[0] + ' is ' + getPositionInAbcArray(myLetterArray[0]));
    console.log(myLetterArray[1] + ' is ' + getPositionInAbcArray(myLetterArray[1]));
};

*/

$(document).ready(function() {

    var correctCounter = 0;
    var resultMessage = "";

    fillLetters();

    function fillLetters() {

        var sentArray = getExerciseLetters();

        $('#letterOne').text(sentArray[0]);
        $('#letterTwo').text(sentArray[1]);
    };

    writeCorrectCounter();

    function writeCorrectCounter() {
        $('#counter').html(correctCounter + '/10');
    }

    writeResultMessage();

    function writeResultMessage() {
        $('#resultMessage').html('The answer is ' + resultMessage)
    }
    var answerIs = new Boolean();

    // The code duplication is getting out of hand here

    $('#letterOne').on('click', function() {
        answerIs = assessAnswer($('#letterOne').html(), $('#letterTwo').html());
        if (answerIs) {
            if(correctCounter > 10) {
                correctCounter = 0;
            }
            correctCounter++;
            writeCorrectCounter();
        }

        // LOG
        console.log('User has clicked letter ' + $('#letterOne').html().toUpperCase());
        console.log(answerIs);
        fillLetters();
    });

    $('#letterTwo').on('click', function() {
        answerIs = assessAnswer($('#letterTwo').html(), $('#letterOne').html());
        if (answerIs) {
            correctCounter++;
            writeCorrectCounter();
            if(correctCounter > 9) {
                correctCounter = 0;
            }
        }

        // LOG
        console.log('User has clicked letter ' + $('#letterTwo').html().toUpperCase());
        console.log(answerIs);
        fillLetters();
    });

});
