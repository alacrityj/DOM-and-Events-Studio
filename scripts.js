// Write your JavaScript code here.
window.addEventListener("load", () => {
    // all our code goes here
    let imgObj = document.getElementById("rocket");
    let status = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleWidth = document.getElementById("spaceShuttleWidth");
    let bg = document.getElementById("shuttleBackground");
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';

    let takeOff = this.document.getElementById("takeOff");
    takeOff.addEventListener("click", () => { 
        result = window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (result) {
            status.innerHTML = "Shuttle in Flight";
            bg.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
            imgObj.style.bottom = '10px';
        }
    });
    
    let land = this.document.getElementById("land");
    land.addEventListener("click", () => {
        result = window.alert("The shuttle is landing. Landing gear engaged.");
            status.innerHTML = "The shuttle has landed.";
            bg.style.backgroundColor = "";
            shuttleHeight.innerHTML = "0";
            shuttleWidth.innerHTML = "0";
            imgObj.style.bottom = "0";
            imgObj.style.left = "0";
    });

    let missionAbort = this.document.getElementById("missionAbort");
    missionAbort.addEventListener("click", () => {
        result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            status.innerHTML = "Mission Aborted.";
            bg.style.backgroundColor = "";
            shuttleHeight.innerHTML = "0";
            shuttleWidth.innerHTML = "0";
            imgObj.style.bottom = "0";
            imgObj.style.left = "0";
        }
    });

    let up = this.document.getElementById("up");
    let down = this.document.getElementById("down");
    let left = this.document.getElementById("left");
    let right = this.document.getElementById("right");
  
    up.addEventListener("click", () => {
    if (status.innerHTML === "Shuttle in Flight" && shuttleHeight.innerHTML < 250000) {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        imgObj.style.bottom = parseInt(imgObj.style.bottom) + 10 + "px";
    } else if (shuttleHeight.innerHTML >= 250000) {
        result = window.alert("Woah. Too high!");
    } else {
        result = window.alert("Let's take off first, hmm?");
    }
    });

    down.addEventListener("click", () => {
    if (status.innerHTML === "Shuttle in Flight" && shuttleHeight.innerHTML > 0) {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        imgObj.style.bottom = parseInt(imgObj.style.bottom) - 10 + "px";
    } else {
        result = window.alert("Are you trying to dig a hole???");
    }
    });

    right.addEventListener("click", () => {
        if (status.innerHTML === "Shuttle in Flight" && shuttleWidth.innerHTML < 290000) {
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) + 10000;
            imgObj.style.left= parseInt(imgObj.style.left) + 10 + "px";
        } else {
            result = window.alert("Where do you think you're going? That's too far to the right.");
        }
        });
    
    left.addEventListener("click", () => {
        if (status.innerHTML === "Shuttle in Flight" && shuttleWidth.innerHTML > 0) {
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) - 10000;
            imgObj.style.left= parseInt(imgObj.style.left) - 10 + "px";
        } else {
            result = window.alert("Nope! You'll have to go right from here.");
        }
        });


  
});

