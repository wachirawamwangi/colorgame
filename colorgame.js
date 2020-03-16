var box = document.getElementsByTagName("td");
var colorChoice = document.getElementById("colorChoice");
var newColors = document.getElementById("newColors");
var easyMode = document.getElementById("easyMode")
var hide = document.getElementById("hide")
var hardMode = document.getElementById("hardMode")
var head = document.getElementsByClassName("tHeadSpan")
var scoreBoard = document.getElementById("scoreBoard");
var scoreBoard2 = document.getElementById("scoreBoard2");
var reset = document.getElementById("reset");



var scores = box.length
var totalScore = 0
scoreBoard2.textContent = "Total Scores: " + totalScore
scoreBoard.textContent = "Current Scores: " + scores

newColors.addEventListener("click", function(){
    generateColor();
    for (var i = 0; i < box.length; i++){
        if (box[i].addEventListener){
            box[i].removeEventListener("click", gameButtons)
            box[i].addEventListener("click", gameButtons) 
        }
    }
})
   
easyMode.addEventListener("click", function(){
    hide.remove(); 
    hardMode.style.display = "inline";
    fullReset();
    this.remove()
})
reset.addEventListener("click", resetFun)

function generateColor (){
        for (var i = 0; i < box.length; i++){
            box[i].style.background = "rgb(" + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255)+")"
            head[0].style.background = "red"
            head[1].style.background = "green"
            head[2].style.background = "blue"
            scores = box.length
            scoreBoard2.textContent = "Total Scores: " + totalScore
            scoreBoard.textContent = "Current Scores: " + scores
            box[i].addEventListener("click",gameButtons) 
        }
        colorChoice.textContent = box[getRandomIntInclusive(0, box.length-1)].style.backgroundColor
        cut1 = colorChoice.textContent.replace("rgb(", "").replace(")", "").replace(",", "").replace(",", "").split(" ")


        for (var i = 0; i<cut1.length; i++){
            head[i].style.width = (Number(cut1[i])/255)*head[1].parentNode.clientWidth + "px"
        }
}

generateColor();

function endGame () {
    if (totalScore < 1){
        var youLost = confirm("Sorry You have Lost, Play Again?")
        if (youLost){
            fullReset();
        } else {
            fullReset()
        }
    } else { 
    var playAgain = confirm("Game Over, Play again?")
    if (playAgain){
        partialReset();
    } else {
        if ((totalScore) > 1) {
            resetFun();
        } else {
        fullReset()
        }
    }
}
}
function resetFun () {
    var lossScores = confirm("You Will Lose All Scores, Continue To Exit?")
            if (lossScores){
                fullReset ();
            } else {
                partialReset();
            }
}

function fullReset () {
    totalScore = 0
    partialReset();
}

function partialReset () {
    generateColor();
    scores = box.length
    scoreBoard.textContent = "Current Scores: " + scores
    scoreBoard2.textContent = "Total Scores: " + totalScore
}

function gameButtons (e){
    if (this.style.backgroundColor == colorChoice.textContent){
        for(var i = 0; i < box.length; i++){
            box[i].style.backgroundColor = this.style.backgroundColor; 
            for(var j = 0; j < head.length; j++){
                head[j].style.backgroundColor = this.style.backgroundColor;
                head[j].style.width = "100%"
            }
        }
        totalScore += scores
        scoreBoard2.textContent = "Total Scores: " + totalScore
        endGame();
    } else {
        this.style.backgroundColor = "white";
        scores -= 2 
        scoreBoard.textContent = "Current Scores: " + scores
        scoreBoard2.textContent = "Total Scores: " + totalScore
        this.removeEventListener("click",gameButtons)
    }
    e.stopPropagation();
    e.preventDefault();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

