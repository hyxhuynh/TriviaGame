
// Total questions
var total = 7;

var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions =0;

var intervalId;

// changing the state of the timer
var clockRunning = false;

var q1;
var q2;
var q3;
var q4;
var q5;
var q6;
var q7;

// Set the correct answers
var answers = ['c','c','a','b','c','d','b'];

window.onload = function(){
    $("form").hide()

    $("#startButton").click(function(){
        quizTimer.start();
        $("form").show();
    });
    
    $('#submitButton').click(function(event) {
        
        event.preventDefault();

        if (submitAnswers() ){
            quizTimer.stop();
            $(".instruction").hide();
            $("form").hide();
            $("button").hide();
            $("#correctResults").html('Correct Answers: ' + correctAnswers);
            $("#incorrectResults").html('Incorrect Answers: '+ wrongAnswers);
        }
        
    });
}

// creat a quizTimer object with the following methods
var quizTimer = {
    
    timeAllowed: 30,

    // start the timer
    start: function() {

        // Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {    
            intervalId = setInterval(quizTimer.decrement, 1000);
            clockRunning = true;
        }
    },

    // countdown time
    decrement: function() {
        quizTimer.timeAllowed--;
        $('#timer').html("<h3> Time Remaining: " + quizTimer.timeAllowed + "</h3>" );

        // When time countdowns to 0, stop the count and give user an alert
        if (quizTimer.timeAllowed === 0){
            // Stop the timer 
            quizTimer.stop();

            // Give user an alert
            alert("Time's Up!");

            q1 = document.forms ["quizForm"]["question-1"].value;
            q2 = document.forms ["quizForm"]["question-2"].value;
            q3 = document.forms ["quizForm"]["question-3"].value;
            q4 = document.forms ["quizForm"]["question-4"].value;
            q5 = document.forms ["quizForm"]["question-5"].value;
            q6 = document.forms ["quizForm"]["question-6"].value;
            q7 = document.forms ["quizForm"]["question-7"].value;
            
            for (var i = 1; i <= total; i++) {
                if (eval('q'+i) == null || eval('q'+i) == '') {
                    unansweredQuestions++;     
                }
                else if (eval('q'+i) == answers[i-1]) {
                    correctAnswers++;  
                }
        
                else {
                    wrongAnswers++;
                }
            }

            // Once the time runs out, do the folowing:
            $(".instruction").hide();
            $("form").hide();
            $("button").hide();
            $("#correctResults").html('Correct Answers: ' + correctAnswers);
            $("#incorrectResults").html('Incorrect Answers: '+ wrongAnswers);
            $("#unansweredQuestions").html('Unanswered Questions: '+ unansweredQuestions);
        }
    },

    // stop the timer
    stop: function() {

        //Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },
}


// This function is executed once the user hits the submit button
function submitAnswers() {
    
    q1 = document.forms ["quizForm"]["question-1"].value;
    q2 = document.forms ["quizForm"]["question-2"].value;
    q3 = document.forms ["quizForm"]["question-3"].value;
    q4 = document.forms ["quizForm"]["question-4"].value;
    q5 = document.forms ["quizForm"]["question-5"].value;
    q6 = document.forms ["quizForm"]["question-6"].value;
    q7 = document.forms ["quizForm"]["question-7"].value;


    // Remind user if a question is missed
    // If the user misses more than 1 question, it will remind you the first question out of all the questions you missed.
    for (var i = 1; i <= total; i++) {
        if (eval('q'+i) == null || eval('q'+i) == '') {
            alert ('You missed question ' + [i]);
            // When the submit button is clicked, it will not proceed to clear the screen 
            // Exit out of the submit button event listener after reminding the user about the missed questions
            return false;
        }
    }

    // Total up the number of correct and incorrect answers
    for (var i = 1; i <= total; i++) {
        if (eval('q'+i) == answers[i-1]) {
            correctAnswers++; 
            console.log(correctAnswers);  
        }

        else {
            wrongAnswers++;
        }
    }

    // When the submit button is clicked, proceed to clear the screen to show the correct and incorrect answers
    return true;

};










