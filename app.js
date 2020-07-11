var disMin = document.getElementById('min');
var disSec = document.getElementById('sec');
var disMilli = document.getElementById('milli');
var min = 0;
var sec = 0;
var milli = 0;
var Interval;
var startBtn = document.getElementById('start');
function start() {
    startBtn.disabled = true;
    Interval =  setInterval(function timer() {
        milli++;
        disMilli.innerHTML = milli;
        console.log(milli);
        if (milli >= 100) {
            sec++;
            disSec.innerHTML = sec;
            milli = 0;
            if (sec >= 60) {
                min++;
                disMin.innerHTML = min;
                sec = 0;
            }
        }
    }, 10)
}
function stop() {
    startBtn.disabled = false;
    clearInterval(Interval);
}
function pause() {
    startBtn.disabled = false;
    min = 0;
    sec = 0;
    milli = 0;
    disMin.innerHTML = min;
    disSec.innerHTML = sec;
    disMilli.innerHTML = milli;
    stop();
}