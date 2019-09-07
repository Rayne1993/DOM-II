// Your code goes here
const navStyle = document.querySelector("nav");
navStyle.addEventListener("mouseover", function( event ) {
    event.target.style.color = "lightblue";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

addEventListener("keydown", function( event ) {
    this.document.body.style.background = "lightblue";
    this.setTimeout(function() {
        event.target.style.background = ""
    }, 500);
}, false);

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  };
  let scale = 1;
  const el = document.querySelector(".intro img");
  el.addEventListener('wheel', zoom);