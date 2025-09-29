let countdown;

document.getElementById("startBtn").onclick = function () {
    clearInterval(countdown);

    let h = +document.getElementById("hours").value || 0;
    let m = +document.getElementById("minutes").value || 0;
    let s = +document.getElementById("seconds").value || 0;

    let total = h * 3600 + m * 60 + s;

    countdown = setInterval(() => {
        if (total <= 0) {
            clearInterval(countdown);
            alert("Time’s up!");
        } else {
            total--;
            let hrs = String(Math.floor(total / 3600)).padStart(2, "0");
            let mins = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
            let secs = String(total % 60).padStart(2, "0");
            document.getElementById("timer").innerText = `${hrs}:${mins}:${secs}`;
        }
    }, 1000);
};

document.getElementById("resetBtn").onclick = function () {
    clearInterval(countdown);
    document.getElementById("timer").innerText = "00:00:00";
    document.getElementById("hours").value =
        document.getElementById("minutes").value =
        document.getElementById("seconds").value = "";
};





