# Big Black Clock Inator

This is a JavaScript code snippet that displays a clock with real-time hour and minute indicators. The clock includes functionality for updating the time of day (morning, afternoon, evening, or night) and a progress bar that updates every five minutes. The script also includes a function for randomly generating characters for each ```nbsp``` element. 

This project is an assignment under the course UXDG-320 provided by the [Savannah College of Art and Design](https://www.scad.edu/), which allow students to propose solutions to real-world problems with novel, interactive technology solutions. Students can explore variety of coding languages and their intended user experience design applications, and effectively collaborate to design solutions, evaluate design feasibility, and test user experiences.

## Getting Started

### Prerequisites

To use this code, you will need a basic understanding of JavaScript, as well as an HTML document that includes the necessary markup to display the clock. 

### Installing

To get started with this code, simply download the JavaScript file and include it in your HTML document using a script tag. 

```html
<script src="path/to/clock.js"></script>
```

Sure, here's the "Setting Up the Clock" section of the documentation:

## Setting Up the Clock

To set up the clock, you will need to create a container element with the necessary markup to display the hour and minute indicators. Here is an example of what the HTML markup might look like:

```html
<div id="clock">
    <div class="hour">
        <div class="digit" id="h_0"></div>
        <div class="digit" id="h_1"></div>
    </div>
    <div class="minute">
        <div class="digit" id="m_0"></div>
        <div class="digit" id="m_1"></div>
    </div>
    <div class="time-indicator" id="past">Past</div>
    <div class="time-indicator" id="to">To</div>
    <div class="nbsp"></div>
    <div class="nbsp"></div>
</div>
```

Once you have added this markup to your HTML document, you can use the following code to initialize the clock:

```javascript
$(function () {
    minutes = {
        0: $('#clock #m_0'),
        1: $('#clock #m_1'),
        2: $('#clock #m_2'),
        3: $('#clock #m_3'),
        4: $('#clock #m_4'),
        5: $('#clock #m_5'),
        6: $('#clock #m_6'),
        7: $('#clock #m_7'),
        8: $('#clock #m_8'),
        9: $('#clock #m_9'),
        10: $('#clock #m_10'),
        11: $('#clock #m_11'),
        12: $('#clock #m_12'),
        13: $('#clock #m_13'),
        14: $('#clock #m_14'),
        15: $('#clock #m_15'),
        16: $('#clock #m_16'),
        17: $('#clock #m_17'),
        18: $('#clock #m_18'),
        19: $('#clock #m_19'),
        20: $('#clock #m_20'),
        30: $('#clock #m_30'),
        40: $('#clock #m_40'),
        50: $('#clock #m_50'),
    };

    hours = {
        0: $('#clock #h_0'),
        1: $('#clock #h_1'),
        2: $('#clock #h_2'),
        3: $('#clock #h_3'),
        4: $('#clock #h_4'),
        5: $('#clock #h_5'),
        6: $('#clock #h_6'),
        7: $('#clock #h_7'),
        8: $('#clock #h_8'),
        9: $('#clock #h_9'),
        10: $('#clock #h_10'),
        11: $('#clock #h_11'),
    };

    to = $('#clock #to');
    past = $('#clock #past');

    nbsps = $('#clock .nbsp');

    progress = $('#progressbar');


    updateClock();
    adjustProgress();
    updateTimeOfDay();
    first();
});
```

This code uses jQuery to select the necessary elements by their IDs, and initializes the clock using the `updateClock()`, `adjustProgress()`, `updateTimeOfDay()`, and `first()` functions. You can modify the IDs and classes used in the HTML markup and JavaScript code to customize the clock's appearance and functionality to suit your needs.
