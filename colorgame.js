var box = document.getElementsByTagName("td");
var colorChoice = document.getElementById("colorChoice");
var newColors = document.getElementById("newColors");
var easyMode = document.getElementById("easyMode")
var hide = document.getElementById("hide")
var hardMode = document.getElementById("hardMode")
var head = document.getElementsByClassName("tHeadSpan")
var scoreBoard = document.getElementById("scoreBoard");
var scoreBoard2 = document.getElementById("scoreBoard2");



var scores = box.length
var totalScore = 0
scoreBoard2.textContent = "Your Total Scores are: " + totalScore
scoreBoard.textContent = "Your current Scores are: " + scores
function generateColor (){
        for (var i = 0; i < box.length; i++){
            box[i].style.background = "rgb(" + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255)+")"
            head[0].style.backgroundColor = "red";
            head[1].style.backgroundColor = "green";
            head[2].style.backgroundColor = "blue";
            scores = box.length
            scoreBoard2.textContent = "Your Total Scores are: " + totalScore
            scoreBoard.textContent = "Your current Scores are: " + scores

 
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
            totalScore = 0
            scores = box.length
            scoreBoard2.textContent = "Your Total Scores are: " + totalScore
            scoreBoard.textContent = "Your Current Scores are: " + scores
            generateColor();
        } else {
            totalScore = 0
            scores = box.length
            scoreBoard2.textContent = "Your Total Scores are: " + totalScore
            scoreBoard.textContent = "Your Current Scores are: " + scores
            generateColor();
        }
    } else {    
    var playAgain = confirm("Game Over, Play again?")
    if (playAgain){
        generateColor();
        scores = box.length
        scoreBoard.textContent = "Your Current Scores are: " + scores
    } else {
        if ((scores || totalScore) > 1) {
            var lossScores = confirm("you will loss all scores, continue?")
            if (lossScores){
                totalScore = 0
                scores = box.length
                scoreBoard2.textContent = "Your Total Scores are: " + totalScore
                scoreBoard.textContent = "Your Current Scores are: " + scores
                generateColor();
            } else {
                generateColor();
                scores = box.length
                scoreBoard.textContent = "Your Current Scores are: " + scores
            }
        }
        generateColor();
        totalScore = 0;
        scores = box.length
        scoreBoard.textContent = "Your Current Scores are: " + scores
        scoreBoard2.textContent = "Your Total Scores are: " + totalScore
    }
}
}

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
    generateColor(); 
    hardMode.style.display = "inline";
    totalScore = 0
    scores = box.length
    scoreBoard2.textContent = "Your Total Scores are: " + totalScore
    scoreBoard.textContent = "Your Current Scores are: " + scores
    this.remove()})

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
        console.log("current total scores = " + totalScore)
        scoreBoard2.textContent = "Your Total Scores are: " + totalScore
        endGame();
    } else {
        this.style.backgroundColor = "white";
        scores -= 2 
        scoreBoard.textContent = "Your Current Scores are: " + scores
        scoreBoard2.textContent = "Your Total Scores are: " + totalScore
        console.log("current scores = " + scores)
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

