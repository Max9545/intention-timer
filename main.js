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
var minBox = document.querySelector('.input-box2');
var secBox = document.querySelector('.input-box3');
var startButton = document.querySelector('.start-btn');

var activity;

study.addEventListener('click', changeStudyColor);
meditate.addEventListener('click', changeMeditateColor);
exercise.addEventListener('click', changeExerciseColor);
minBox.addEventListener('keydown', preventE);
secBox.addEventListener('keydown', preventE);
startButton.addEventListener('click',startActivity);

function startActivity() {
  console.log('hi');
 activity = new Activity ({});
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
