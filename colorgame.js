var box = document.getElementsByTagName("td");
var colorChoice = document.getElementById("colorChoice");
var newColors = document.getElementById("newColors");
var easyMode = document.getElementById("easyMode")
var hide = document.getElementById("hide")
var hardMode = document.getElementById("hardMode")
var head = document.getElementsByTagName("span")

function generateColor (){
for (var i = 0; i < box.length; i++){
    box[i].style.background = "rgb(" + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255)+")"
    head[0].style.backgroundColor = "red";
    head[1].style.backgroundColor = "green";
    head[2].style.backgroundColor = "blue";
    box[i].addEventListener("click", function (){
        if (this.style.backgroundColor == colorChoice.textContent){
            for(var i = 0; i < box.length; i++){
                box[i].style.backgroundColor = this.style.backgroundColor; 
                for(var j = 0; j < head.length; j++){
                    head[j].style.backgroundColor = this.style.backgroundColor;
                    head[j].style.width = "100%"
                }
            }
        } else {
            this.style.backgroundColor = "white";
        }
    })
}
colorChoice.textContent = box[getRandomIntInclusive(0, box.length-1)].style.backgroundColor
cut1 = colorChoice.textContent.replace("rgb(", "").replace(")", "").replace(",", "").replace(",", "").split(" ")
console.log(cut1)

for (var i = 0; i<cut1.length; i++){
    head[i].style.width = (Number(cut1[i])/255)*10 + "rem" 
}


}

generateColor();

newColors.addEventListener("click", function(){generateColor()})
easyMode.addEventListener("click", function(){hide.remove(); generateColor(); hardMode.style.display = "inline"; this.remove()})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

