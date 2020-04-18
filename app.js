'use strict'

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none"; 
    } else { x.style.display = "block";
    }
  }

  // UX NO 7 //
  function startTime(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min)
    document.getElementById("clock").innerHTML = hr + ":" + min;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', ' September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " +curDay+ " " +curMonth+ " " +curYear;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function() { startTime()}, 500)
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }