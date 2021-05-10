var scoreForm = document.getElementById("score-form");
var scoreList = document.getElementById("score-list");

function handleScoreSubmit(event) {
  highScores.classList.remove('hide')    
    event.preventDefault();
  
    var scoreName = $('input[name="score-input"]').val();

    if (!scoreName) {
        console.log('No name filled out in form!');
        return;
    }

    var scoreList = $(
        //the listed item element will be added
        '<li class>'
    );
    scoreList.text(scoreName);
    // print to page
    scoreList.append(scoreList);

    $('input[name="score-input"]').val('');
}

scoreForm.onclick('submit', handleScoreSubmit);