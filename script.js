function pomodoro() {
    document.body.style.backgroundColor = 'rgb(186, 73, 73)';
    document.getElementById('time').innerText = "25:00";
}
function shortbreak() { 
    document.body.style.backgroundColor = 'rgb(56, 133, 138)';
    document.getElementById('time').innerText = "5:00";
}
function longbreak() {   
    document.body.style.backgroundColor = 'rgb(57, 112, 151)';
    document.getElementById('time').innerText = "15:00";
}
const button_links = document.querySelectorAll(".button__link");

button_links.forEach(buttonLink => {
    buttonLink.addEventListener('click', function() {
        document.querySelector('.active')?.classList.remove('active');
        buttonLink.classList.add('active');
    });
})
let countdown;
let countdownTime = 0;
let isRunning = false;
let initialTime = 0;

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    document.getElementById('timeDisplay').textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function startTimer() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        countdownTime--;
        displayTime(countdownTime);
        if (countdownTime <= 0) {
            clearInterval(countdown);
            isRunning = false;
            document.getElementById('startPause').textContent = 'Start';
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    countdownTime = initialTime;
    displayTime(countdownTime);
    isRunning = false;
    document.getElementById('startPause').textContent = 'Start';
}

document.getElementById('set25').addEventListener('click', () => {
    initialTime = 25 * 60;
    countdownTime = initialTime;
    resetTimer();
});

document.getElementById('set15').addEventListener('click', () => {
    initialTime = 15 * 60;
    countdownTime = initialTime;
    resetTimer();
});

document.getElementById('set5').addEventListener('click', () => {
    initialTime = 5 * 60;
    countdownTime = initialTime;
    resetTimer();
});

document.getElementById('startPause').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
        document.getElementById('startPause').textContent = 'Start';
        document.getElementById('reset').style.display = 'none';
    } else {
        isRunning = true;
        startTimer();
        document.getElementById('startPause').textContent = 'Pause';
        document.getElementById('reset').style.display = 'block';
    }
});

document.getElementById('reset').addEventListener('click', resetTimer);

const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);