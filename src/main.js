function startCount(){
    setTimeout(showWindow, 3000);
}

let windowBackground = document.getElementById("windowBackground");
let audioAlert = document.getElementById("audioAlert");


function showWindow(){
    audioAlert.volume = 0.3;
    audioAlert.play();
    windowBackground.style.display="flex";
}

let closeBtn = document.getElementById("closeBtn");
let windowContainer = document.getElementById("windowContainer");

closeBtn.addEventListener("click", () => hideWindow());

function hideWindow(){

    windowContainer.classList.add("close");

    setTimeout(() => {
        windowContainer.classList.remove("close");
        windowBackground.style.display="none";
    }, 1000);
}