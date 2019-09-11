// Your code goes here
//mouseover on nav a
const navStyle = document.querySelector("nav");
navStyle.addEventListener("mouseover", function( event ) {
    event.target.style.color = "lightblue";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

//keydown on background of body
addEventListener("keydown", function( event ) {
    this.document.body.style.background = "lightblue";
    this.setTimeout(function() {
        event.target.style.background = ""
    }, 500);
}, false);

//wheel on bus img
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
};
let scale = 1;
const el = document.querySelector(".intro img");
el.addEventListener('wheel', zoom);

//drag


//load on window
window.addEventListener('load', (a) => {
    //alert("Page is loaded");
    console.log("page loaded");
});

//focus on logo

//resize to change background
window.addEventListener("resize", function ( event ) {
    this.document.body.style.background = "red";
});
//keydown resets background

//scroll
window.addEventListener("scroll", function(event) {
   // this.alert("You scrolled");
   this.console.log("Page scrolled");
});

//select
const text = document.querySelectorAll("p");
text.forEach((event) => {
    event.addEventListener("select", (e) => {
        console.log("text selected");
    });
    event.addEventListener("copy", (e) => {
        alert("You copied text");
    });
});

//dblclick
const btn = document.querySelector(".destination .btn");
btn.addEventListener("dblclick", function(event) {
    event.target.style.background = "red";
});

//preventDefault
const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        alert("Does not work");
        event.preventDefault();
    });
});