// @@include('alert.js')

let header = document.querySelector(".header");
let intro = document.querySelector(".intro").scrollHeight;
let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let wedo = document.querySelectorAll(".accordion__inner");

window.addEventListener("scroll", function() {

  let scrollPos = window.scrollY;
  
  if(scrollPos >= intro) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

document.addEventListener("DOMContentLoaded", function() {

  let scrollPos = window.scrollY;
  
  if(scrollPos >= intro) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

burger.addEventListener("click", function() {

  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

for(wedoItem of wedo);

  wedoItem.addEventListener("click", function(){

    wedoItem.classList.toggle("active");
  });




