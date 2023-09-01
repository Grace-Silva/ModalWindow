function startCount(){
    setTimeout(showWindow, 3000);
}

let windowBackground = document.getElementById("windowBackground");
let audioAlert = document.getElementById("audioAlert");


function showWindow(){
    windowBackground.style.display="block";
    audioAlert.play();
}

let closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => hideWindow());

function hideWindow(){
    windowBackground.style.display="none";
}