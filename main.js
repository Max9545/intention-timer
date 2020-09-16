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
var timer = document.querySelector('.timer');
var logActivity = document.querySelector('.log-activity');
var pastActivities = document.querySelector('.past-activities');
var pastCards = document.querySelector('.past-cards');
var loggedCategory = document.querySelector('.logged-category');
var loggedTimes = document.querySelector('.logged-times');
var loggedGoals = document.querySelector('.logged-goals');
var colorIndicator = document.querySelector('.color-indicator');

var activity;

study.addEventListener('click', changeStudyColor);
meditate.addEventListener('click', changeMeditateColor);
exercise.addEventListener('click', changeExerciseColor);
minBox.addEventListener('keydown', preventE);
secBox.addEventListener('keydown', preventE);
startButton.addEventListener('click',startActivity);
startTimerButton.addEventListener('click', countdown);
logActivity.addEventListener('click', displayLogActivity)

function startActivity() {
 if (goalBox.value === '') {
     var goalError = document.querySelector('.goal-error');
     goalError.innerHTML = '<p><img class="error-triangle" src="assets/warning.svg"> You need a goal!</p>';
 }
 else if (minBox.value === '') {
     var minError = document.querySelector('.min-error');
     minError.innerHTML = '<p><img class="error-triangle" src="assets/warning.svg"> You need a number of minutes!</p>';
 }
 else if (secBox.value === '') {
     var secError = document.querySelector('.sec-error');
     secError.innerHTML = '<p><img class="error-triangle" src="assets/warning.svg"> You need a number of seconds!</p>';
 } else {
     formHider();
     activity = new Activity ({});
     displayGoal();
     displayTime();
     loggedTimes.textContent = `${minBox.value} MIN ${secBox.value} SECONDS`;
     loggedGoals.textContent = `${goalBox.value}`;
  }
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
    startTimerButton.classList.add('study-colors');
    loggedCategory.textContent = 'Study';
    colorIndicator.classList.add('study-colors');
}

function changeMeditateColor() {
    addHidden([meditatePreselectImage]);
    removeHidden([meditateSelectedImage]);
    addMeditateColor([meditate]);
    startTimerButton.classList.add('meditate-colors');
    loggedCategory.textContent = 'Meditate';
    colorIndicator.classList.add('meditate-colors');
}

function changeExerciseColor() {
    addHidden([exercisePreselectImage]);
    removeHidden([exerciseSelectedImage]);
    addExerciseColor([exercise]);
    startTimerButton.classList.add('exercise-colors');
    loggedCategory.textContent = 'Exercise';
    colorIndicator.classList.add('exercise-colors');
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

function displayTime() {
    timer.innerText = minBox.value + ':' + (secBox.value < 10 ? "0" : "") + secBox.value;
}

function countdown() {
  var time = document.querySelector('.timer');
  var completionMessage = document.querySelector('.completion-message');
  var seconds = time.textContent.split(':')[1];
  var minutes = time.textContent.split(':')[0];
  var interval = setInterval(function() {
    if (seconds <= 0 && minutes <=0) {
      stopTimer(interval);
      startTimerButton.innerText = 'COMPLETE';
      time.classList.add('hidden');
      completionMessage.classList.remove('hidden');
      logActivity.classList.remove('hidden');
    } else if (seconds <= 0 && minutes > 0) {
    minutes--;
    seconds+= 59;
    } else {
    seconds--;
    }
    renderTime(time, seconds, minutes);
  }, 1000)
}

function renderTime(time, seconds, minutes) {
  time.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function stopTimer(interval) {
  clearInterval(interval);
}

function displayLogActivity() {
  var pastHold1 = document.querySelector('.past-holder-p1');

  var pastHold2 = document.querySelector('.past-holder-p2');

  pastHold1.classList.add('hidden');
  pastHold2.classList.add('hidden');
  pastCards.classList.remove('hidden');
}
