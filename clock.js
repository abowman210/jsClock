function showTime(){
    var date = new Date();
    //shows hours 0 - 23
    var h = date.getHours();
    //shows mintues 0 - 59
    var m = date.getMinutes();
    //shows seconds 0 - 59
    var s = date.getSeconds();
    var session = "AM";

//conditions to showing the time
    if(h === 0){
        h == 12;
    }
    if (h > 12){
        h = h - 12;
        session = "PM";
    }
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0"  + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    //concatenation for the time
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById('myClockDisplay').innerHTML = time;
    //so the clock will also work in firefox
    document.getElementById('myClockDisplay').textContent = time;
    setTimeout(showTime, 1000);
}

showTime();