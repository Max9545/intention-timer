var study = document.querySelector('.study');
var meditate = document.querySelector('.meditate');
var exercise = document.querySelector('.exercise');
var studyPreselectImage = document.querySelector('.study-preselect-image');
var studySelectedImage = document.querySelector('.study-selected-image');
var meditatePreselectImage = document.querySelector('.meditate-preselect-image');
var meditateSelectedImage = document.querySelector('.meditate-selected-image');
var exercisePreselectImage = document.querySelector('.exercise-preselect-image');
var exerciseSelectedImage = document.querySelector('.exercise-selected-image');


study.addEventListener('click', changeStudyColor);
meditate.addEventListener('click', changeMeditateColor);
exercise.addEventListener('click', changeExerciseColor);

function changeStudyColor() {
    addHidden([studyPreselectImage]);
    removeHidden([studySelectedImage]);
};

function changeMeditateColor() {
    addHidden([meditatePreselectImage]);
    removeHidden([meditateSelectedImage]);
};

function changeExerciseColor() {
    addHidden([exercisePreselectImage]);
    removeHidden([exerciseSelectedImage]);
};

function addHidden(elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
};

function removeHidden(elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden');
    }
};