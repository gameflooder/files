// SDK
const HAS_SDK = true

function reward() {
    // unmute
    Howler.mute(false)
    
    // ad reward
    doubleTimer += 130

    // tell user
    showNotification("img/UI/wave.svg", null, "YOU NOW HAVE DOUBLE SPEED FOR 2 MINUTES!")
}

// To trigger the event Listener adBreakStart
document.addEventListener("adBreakStart", () => {
Howler.mute(true)
});

// To trigger the event Listener adBreakComplete
document.addEventListener("adBreakComplete", () => {
Howler.mute(false)
reward()
});


function onAdRequested() {
    cmgRewardAds()
}

if (HAS_SDK) {
    // remove the fullscreen button
    document.getElementById("fullscreen-option").style.display = "none"
}

// disable unwanted behaviour
window.addEventListener("keydown", (event) => {
if (["ArrowUp", "ArrowDown", " "].includes(event.key)) {
    event.preventDefault();
}
});

// loader
let body = document.querySelector("body")
let loader = document.querySelector("#loader")
let mainScreen = document.querySelector("#main")
let secondaryScreen = document.querySelector("#secondary")

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        body.style.visibility = "hidden";
        loader.style.visibility = "visible";

    } else {
        init()

        if (parent && parent.cmgGameEvent) {
            parent.cmgGameEvent("start")
        }

        loader.style.display = "none";
        body.style.visibility = "visible";
        
        secondaryScreen.style.zIndex = -10
        mainScreen.classList.remove("hide")
    }
};

// outer stroke trick
let strokedElements = document.querySelectorAll(".stroke")

strokedElements.forEach(function(element) {
    element.setAttribute("data-content", element.textContent)
})

// scrollbar custom mouse
let scrollElements = document.querySelectorAll(".scroll")

let scrollMouseMove = (event) => {
    let element = event.target

    // remove old state
    element.classList.remove("cursor-drag", "cursor-dragging")
    if (event.offsetX > element.clientWidth) {
        // use mouse input to change the cursor
        if (event.buttons == 1){
            element.classList.add("cursor-dragging")
        } else {
            element.classList.add("cursor-drag")
        }
    }
}
scrollElements.forEach(function(element) {
    element.addEventListener("mousemove", scrollMouseMove)
    element.addEventListener("mousedown", scrollMouseMove)
    element.addEventListener("mouseup", scrollMouseMove)
})

// helpers
function getTimeSeconds() {
    return Date.now() / 1000
}

function secondsToMMSS(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = seconds - (minutes * 60);
    
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds;
}
