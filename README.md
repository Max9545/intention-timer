# Project: Intention Timer - Group

>[Our Project Website](https://max9545.github.io/intention-timer/)

## Project Team 

>[Daniel Allen](https://github.com/DanielAllen542), contributor

>[Jordon Smith](https://github.com/jdxsmith), contributor

>[Max Bregman](https://github.com/Max9545), contributor

## Overview

We’ve built an application that allows a user to set goals for their health and productivity, tied to an amount of time. Users will select an activity category, set the amount of time they want to spend on that activity, and start the timer. The app will log that activity to keep track of how the user has been spending their time.

## Learning Goals

* Develop your skills in writing:
 - semantic HTML
 - clean & organized CSS styles
 - DRY and organized JavaScript
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements
* Persist data across page refreshes by using local storage

## Functionality

### Home Page

* When the user loads the page, a ‘New Activity’ form is displayed, alongside a section for ‘Past Activities’, which will be empty on page load.  

![Screen Shot 2020-09-16 at 8 03 25 PM](https://user-images.githubusercontent.com/67242223/93411199-d9e92580-f857-11ea-8363-41cb8e4765ce.png)

### New Activity Form

* The user can fill out the ‘New Activity’ form by selecting a category and filling in the inputs.  Once all inputs are selected, the user can click the ‘Start Activity’ button, which will take them to a new section of the site titled ‘Current Activity’.

![Screen Shot 2020-09-16 at 8 06 22 PM](https://user-images.githubusercontent.com/67242223/93411522-90e5a100-f858-11ea-93fe-75bee9886958.png)

### Current Activity Section

* After clicking ‘Start Activity’, the user is now on the ‘Current Activity’ page.
* This section displays the user-inputted goal they want to complete, along with a timer based on the number of minutes and seconds they entered on the previous form.  Under the timer, there is a ‘Start’ button which will begin the timer.
* Once the user has clicked ‘Start’ and the timer has completed, a motivational message replaces the timer and the button’s label changes from ‘Start’ to ‘Complete’.
* A new ‘Log Activity’ button will appear after the timer has completed.

![Screen Shot 2020-09-16 at 8 08 14 PM](https://user-images.githubusercontent.com/67242223/93411465-77445980-f858-11ea-821b-cded33fb22ea.png)

![Screen Shot 2020-09-16 at 8 13 10 PM](https://user-images.githubusercontent.com/67242223/93411749-16695100-f859-11ea-8073-a530804c92c5.png)

### Logging an Activity

* After the timer has completed, the user can click the ‘Log Activity’ button.
* Clicking the ‘Log Activity’ button creates a card that appears in the ‘Past Activities’ section on the right side of the page.  The card is based on the activity that the user just completed.
* After the ‘Log Activity’ button has been clicked, the ‘Current Activity’ section disappears and the ‘Completed Activity’ section appears.
* The ‘Completed Activity’ section contains a ‘Create New Activity’ button that will take the user back to the main screen with an empty ‘New Activity’ form.  
* The previously logged activity is still displayed in the ‘Past Activities’ section.

![Screen Shot 2020-09-16 at 8 14 41 PM](https://user-images.githubusercontent.com/67242223/93411858-487ab300-f859-11ea-9a6c-bd7ad05e61bd.png)

![Screen Shot 2020-09-16 at 8 15 33 PM](https://user-images.githubusercontent.com/67242223/93411915-66481800-f859-11ea-94f6-ca6499a85741.png)

## Wins

* Able to communicate issues and work together effectively
* Solid workflow between teammates
    - Communication was consistent and professional
    - Git workflow felt structured and well-thought-out
* Made sure all group members understood code
* Took time to refactor code
* Gained new knowledge by unintentionally doing things the hard way

## Challenges

* Building out a timer and have it countdown correctly
* Getting the correct colors to display across pages/sections based on the user input
* Making the buttons perform properly across the page
* Getting localStorage to work without properly utilizing the Activity class

## Project Specs and Rubric

>[Intention Timer](https://frontend.turing.io/projects/module-1/intention-timer-group.html)
