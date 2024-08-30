let milli = 0
let sec = 0
let minutes = 0
let hours = 0
var id = 0
let timeref = document.querySelector(".timedisplay");
let startb = document.getElementById("startb")
let stop4 = document.getElementById("stop4")
let stop3 = document.getElementById("stop3")
let stop2 = document.getElementById("stop2")
let stop1 = document.getElementById("stop1")
let lap = document.getElementById("lap")
let list = document.getElementById("list")

startb.addEventListener("click", stopwatch)
lap.addEventListener("click", () => {
    if (lap.innerHTML == "lap") {
        if (milli == "00") {
            alert("Start the stopwatch first")
        } else {
            let li = document.createElement("li")
            li.innerHTML = hours + ":" + minutes + ":" + sec + ":" + milli
            list.append(li)
        }
    } else {
        startb.innerHTML = "start"
        lap.innerHTML = "lap"
        stop1.innerHTML = "00"
        stop2.innerHTML = "00"
        stop3.innerHTML = "00"
        stop4.innerHTML = "00"
        list.innerHTML = ""
        milli = 0
        sec = 0
        minutes = 0
        hours = 0
        clearInterval(id)
    }

})

function stopwatch() {
    if (startb.innerHTML == "start") {
        startb.innerHTML = "stop"
        lap.innerHTML = "lap"
        id = setInterval(() => {
            milli++;
            stop4.innerHTML = milli
            if (milli == 100) {
                sec++;
                stop3.innerHTML = sec
                milli = 0
                if (sec == 4) {
                    minutes++;
                    stop2.innerHTML = minutes
                    sec = 0
                    if (minutes == 4) {
                        hours++
                        stop1.innerHTML = hours
                    }
                }
            }
        }, 10)
    } else {
        startb.innerHTML = "start"
        lap.innerHTML = "reset"
        clearInterval(id)
    }
}


function watchstart() {
    timer = setInterval(stopwatch, 1000);
}