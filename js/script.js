window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

var menu = this.document.querySelector(".menu");
var menuBtn = this.document.querySelector(".menu-btn");
var closeBtn = this.document.querySelector(".close-btn");

menuBtn.addEventListener("click", ()=>{
    menu.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
    menu.classList.remove("active");
});