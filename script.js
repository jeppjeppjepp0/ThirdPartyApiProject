// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    var allHoursArray = [
        $("#hour-0"),
        $("#hour-1"),
        $("#hour-2"),
        $("#hour-3"),
        $("#hour-4"),
        $("#hour-5"),
        $("#hour-6"),
        $("#hour-7"),
        $("#hour-8"),
        $("#hour-9"),
        $("#hour-10"),
        $("#hour-11"),
        $("#hour-12"),
        $("#hour-13"),
        $("#hour-14"),
        $("#hour-15"),
        $("#hour-16"),
        $("#hour-17"),
        $("#hour-18"),
        $("#hour-19"),
        $("#hour-20"),
        $("#hour-21"),
        $("#hour-22"),
        $("#hour-23"),
    ];

    // 24 empty string values to store text to local storage
    var storedValsArray = [
        "", //0
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""  //23
    ];

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    var saveBtnEl = $(".saveBtn");
    saveBtnEl.on("click", function(){
        for (var i = 0; i < allHoursArray.length; i++){
            console.log(allHoursArray[i].children().eq(1).val());

            if (allHoursArray[i].children().eq(1).val() != null);
            storedValsArray[i] = allHoursArray[i].children().eq(1).val();
            // console.log(storedValsArray[i]);
        }

        localStorage.setItem("storedValsArray", JSON.stringify(storedValsArray));
    });


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var currentHour = dayjs().format("HH");

    for (var i = 0; i < allHoursArray.length; i++){
        // set past
        if (i < currentHour){
            allHoursArray[i].attr("class","row time-block past");
        }
        // set present
        else if (i == currentHour) {
            allHoursArray[i].attr("class","row time-block present");
        }
        // set future
        else {
            allHoursArray[i].attr("class","row time-block future");
        }
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    if (localStorage.getItem("storedValsArray")){
        storedValsArray = JSON.parse(localStorage.getItem("storedValsArray"));
    }

    for (var i = 0; i < allHoursArray.length; i++){
        allHoursArray[i].children().eq(1).text(storedValsArray[i]);
    }

    // TODO: Add code to display the current date in the header of the page.
    var currentDateEl = $("#currentDay");

    currentDateEl.text(dayjs().format("MM/DD/YY hh:mm:ss"));
    console.log(dayjs().format("MM/DD/YY hh:mm:ss"));
});
