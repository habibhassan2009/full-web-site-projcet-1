

var menu = document.getElementById("menu");


function toggle(){
    menu.classList.toggle("toggle");
};














//preloafder//


var loader = document.getElementById("poelader");



window.addEventListener('load', () =>{
loader.style.display = "none";

});





//nav fixed//
let navbar = document.getElementById("menu");



window.addEventListener('scroll', function(){




    if(window.pageYOffset >= 50){


        navbar.classList.add("sticky");

    }
    else{
        navbar.classList.remove("sticky");
    }


});