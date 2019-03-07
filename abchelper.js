var abcArray = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];

function getRandomLetter() {
    return abcArray[Math.floor(Math.random() * abcArray.length)]
}

function getExerciseLetters() {
    var a = new String("");
    var b = new String("");

    do {
        a = getRandomLetter();
        b = getRandomLetter();
    }
    while (a === b);

    return [a, b]
}

function assessAnswer(userLetter, otherLetter) {
    return getPositionInAbcArray(userLetter) > getPositionInAbcArray(otherLetter);
}

function getPositionInAbcArray(letter) {
    return abcArray.indexOf(letter)
}

$(document).ready(function() {

    var correctCounter = 0;
    var exerciseArray = [];

    fillLetters();
    writeCorrectCounter();

    function fillLetters() {
        exerciseArray = getExerciseLetters();

        $('#letterOne').text(exerciseArray[0]);
        $('#letterTwo').text(exerciseArray[1]);
    }

    function writeCorrectCounter() {
        $('#counter').html(correctCounter + '/10');
    }

    var answerIs = new Boolean();
    var pickedLetter = "";
    var notPickedLetter = "";
    var letterOne = $('#letterOne');
    var letterTwo = $('#letterTwo');

    // TODO: fix bug here, the div tag shouldn't react
    $('#letters').on('click', function() {

        letterOne.on('click', function() {
            pickedLetter = letterOne.html();
            notPickedLetter = letterTwo.html();
        })

        letterTwo.on('click', function() {
            pickedLetter = letterTwo.html();
            notPickedLetter = letterOne.html();
        })

        answerIs = assessAnswer(pickedLetter, notPickedLetter);

        if (answerIs) {
            correctCounter++;
            writeCorrectCounter();
            if (correctCounter > 9) {
                correctCounter = 0
            }
        }

        fillLetters();

        // LOG
        console.log('User has clicked letter ' + pickedLetter.toUpperCase() + ' and the answer is ' + answerIs);

        // var resultMessage = "";
        // writeResultMessage();
        // function writeResultMessage() {
        //     $('#resultMessage').html('The answer is ' + resultMessage)
        // }

    })

})