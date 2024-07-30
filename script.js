const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

 function addTask(){
    if(inputBox.value === ''){
        alert("Please write your task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);  
    
    }

    inputBox.value = ""; 
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        success();
        chickedAudio.play();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        trashAudio.play();
      
    } 
},false );

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
const formattedDate = formatter.format(date);
document.getElementById('date').innerHTML = formattedDate;

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}

const audio = new Audio();
audio.src = "./audio/click.wav";
const chickedAudio = new Audio();
chickedAudio.src = "./audio/chicked.wav";
const trashAudio = new Audio();
trashAudio.src = "./audio/trash.wav";


showTask();

function success(){
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      });
}

