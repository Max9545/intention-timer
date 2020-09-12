var study = document.querySelector('.box-study');
var meditate = document.querySelector('.box-meditate');
var exercise = document.querySelector('.box-exercise');
var studyPreselectImage = document.querySelector('.study-preselect-image');
var studySelectedImage = document.querySelector('.study-selected-image');
var meditatePreselectImage = document.querySelector('.meditate-preselect-image');
var meditateSelectedImage = document.querySelector('.meditate-selected-image');
var exercisePreselectImage = document.querySelector('.exercise-preselect-image');
var exerciseSelectedImage = document.querySelector('.exercise-selected-image');
var studyColors = document.querySelector('.study-colors');
var goalBox = document.querySelector('.input-box1');
var minBox = document.querySelector('.input-box2');
var secBox = document.querySelector('.input-box3');
var startButton = document.querySelector('.start-btn');
var currentActivity = document.querySelector('.current-activity');
var newActivityBox = document.querySelector('.new-activity-box');
var goal = document.querySelector('.place-holder');
var startTimerButton = document.querySelector('.start-button');

var activity;

study.addEventListener('click', changeStudyColor);
meditate.addEventListener('click', changeMeditateColor);
exercise.addEventListener('click', changeExerciseColor);
minBox.addEventListener('keydown', preventE);
secBox.addEventListener('keydown', preventE);
startButton.addEventListener('click',startActivity);
startTimerButton.addEventListener('click', countdown);

function startActivity() {
 formHider();
 activity = new Activity ({});
 displayGoal();
}

function formHider() {
 addHidden([newActivityBox]);
 removeHidden([currentActivity]);
}

function preventE(e) {
  var invalidCharacters = ['+','-','e','E', '&', '#'];
  if(invalidCharacters.includes(e.key)) {
    e.preventDefault();
  }
}

function changeStudyColor() {
    addHidden([studyPreselectImage]);
    removeHidden([studySelectedImage]);
    addStudyColor([study]);
}

function changeMeditateColor() {
    addHidden([meditatePreselectImage]);
    removeHidden([meditateSelectedImage]);
    addMeditateColor([meditate]);
}

function changeExerciseColor() {
    addHidden([exercisePreselectImage]);
    removeHidden([exerciseSelectedImage]);
    addExerciseColor([exercise]);
}

function addHidden(elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
}

function removeHidden(elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden');
    }
}

function addStudyColor(elements) {
  for(var i = 0; i < elements.length; i++) {
    elements[i].classList.add('study-colors');
  }
}
function addMeditateColor(elements) {
  for(var i = 0; i < elements.length; i++) {
    elements[i].classList.add('meditate-colors');
  }
}
function addExerciseColor(elements) {
  for(var i = 0; i < elements.length; i++) {
    elements[i].classList.add('exercise-colors');
  }
}

function displayGoal() {
    goal.innerText = goalBox.value;
}

function countdown(minutes, seconds) {
    var seconds = seconds;
    var mins = minutes;
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        var timer = document.getElementById("timer");
        var current_minutes = mins-1;
        seconds--;
        timer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1, seconds-1);
            }
        }
    }
    tick();
    countdown(minBox.value, secBox.value);
}
//You can use this script with a call to onclick, onblur or any other attribute you would like to use. 
//countdown(n);//where n is the number of minutes required.