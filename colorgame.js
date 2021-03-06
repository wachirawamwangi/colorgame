var box = document.getElementsByTagName("td");
var boxAfter = document.getElementsByTagName("td::after");
var colorChoice = document.getElementById("colorChoice");
var newColors = document.getElementById("newColors");
var easyMode = document.getElementById("easyMode")
var hide = document.getElementById("hide")
var hardMode = document.getElementById("hardMode")
var head = document.getElementsByClassName("tHeadSpan")
var scoreBoard = document.getElementById("scoreBoard");
var scoreBoard2 = document.getElementById("scoreBoard2");
var reset = document.getElementById("reset");
var thisColor = document.getElementById("thisColor");




var newColorCounter = 0
var scores = box.length
var totalScore = 0
scoreBoard2.textContent = "Total: " + totalScore
scoreBoard.textContent = "Current: " + scores


newColors.addEventListener("click", function(){
    generateColor();
    for (var i = 0; i < box.length; i++){
        if (box[i].addEventListener){
            box[i].removeEventListener("click", gameButtons)
            box[i].addEventListener("click", gameButtons) 
        }
    }
    newColorCounter += 1
    console.log("newColors")
    if (newColorCounter == 3) {
        this.classList.add("newColorHide")
    } else {
        this.classList.remove("newColorHide")
    }
    console.log(newColorCounter)
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
            scoreBoard2.textContent = "Total: " + totalScore
            scoreBoard.textContent = "Current: " + scores
            box[i].addEventListener("click",gameButtons)
            box[i].textContent = ""
            box[i].classList.remove("contentNone")
        }
        colorChoice.textContent = box[getRandomIntInclusive(0, box.length-1)].style.backgroundColor.toUpperCase();
        thisColor.textContent = colorChoice.textContent
        cut1 = colorChoice.textContent.replace("RGB(", "").replace(")", "").replace(",", "").replace(",", "").split(" ")


        for (var i = 0; i<cut1.length; i++){
            head[i].style.width = (Number(cut1[i])/255)*head[1].parentNode.clientWidth + "px"
        }
}

generateColor();

function endGame () {
    if (totalScore < 1){
        var youLost = confirm("Sorry You have Lost, Play again?")
        if (youLost){
            fullReset();
        } else {
            fullReset()
        }
    } else { 
    var playAgain = confirm("Correct, Play again?" )
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
    newColorCounter = 0
    newColors.classList.remove("newColorHide")
    scores = box.length
    scoreBoard.textContent = "Current: " + scores
    scoreBoard2.textContent = "Total: " + totalScore
}

function gameButtons (e){
    if (this.style.backgroundColor == colorChoice.textContent.toLowerCase()){
        for(var i = 0; i < box.length; i++){
            box[i].style.backgroundColor = this.style.backgroundColor; 
            for(var j = 0; j < head.length; j++){
                head[j].style.backgroundColor = this.style.backgroundColor;
                head[j].style.width = "100%"
            }
        }
        totalScore += scores
        scoreBoard2.textContent = "Total: " + totalScore
        endGame();
    } else {
        thisColor.textContent = this.style.backgroundColor.toUpperCase();
        this.style.backgroundColor = "white";
        scores -= 2 
        scoreBoard.textContent = "Current: " + scores
        scoreBoard2.textContent = "Total: " + totalScore
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

