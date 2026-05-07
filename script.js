console.log("utsho.exe initialized");

const title = document.querySelector("h1");

setInterval(() => {

    title.style.opacity =
    title.style.opacity == "0.5" ? "1" : "0.5";

}, 800);