const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const home = document.getElementById('nav-home');
const logo = document.getElementById('logo');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

// home.onclick = function(e){
//     logo.remove();
// }


