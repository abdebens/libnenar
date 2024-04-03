'use strict';
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
 
});

let prev = document.querySelector('.prev');
 let next = document.querySelector('.next');

prev.addEventListener('click', function(){
  let item = document.querySelectorAll('.slider__content__slide__card');
  
  document.querySelector('.slider__content__slide').appendChild(item[0]);

});


next.addEventListener('click', function(){
  let item = document.querySelectorAll('.slider__content__slide__card');
  document.querySelector('.slider__content__slide').prepend(item[item.length - 1]);
  

});


// Create 50 stars dynamically using JavaScript

  document.addEventListener("DOMContentLoaded", function () {
    const sky = document.querySelector(".sleep");
    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
      createStar();
    }

    function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");

      // Set random position for the star
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;

      sky.appendChild(star);
    }
  });


  const navbar = document.querySelector("[navbar]");
 
  window.addEventListener('scroll', function() {

    
    if (this.window.scrollY >= 50) {
      navbar.classList.add('active');
      hideHeader();
      
    } else {
      navbar.classList.remove('active');
    }
  })



const nav_mobile = document.querySelectorAll('.navigation__items');

nav_mobile.forEach((element) =>

element.addEventListener("click", (ul) => {
const sub_menu = ul.target.parentElement.querySelector(".navigation__sublist");

        const isOpen = sub_menu.classList.contains('clicked');


        if(!isOpen){
        sub_menu.classList.add('clicked');
        
      }else{
        
        nav_mobile.forEach((li) =>{
          li.classList.remove('clicked');
        })
        sub_menu.classList.remove('clicked');
      }

})

); 

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '10rem',
  duration: 900,
  delay: 1000,
  // reset: true, // Animation repeat
})

sr.reveal(`.navbar`, {origin: 'top', delay:2000, duration:2000});
sr.reveal(`.heading__1`, {origin: 'bottom', delay:1000});
sr.reveal(`.letters__img__1`, {origin: 'top', delay:1000});
sr.reveal(`.letters__img__2`, {origin: 'left', delay:1800});
sr.reveal(`.letters__img__3`, {origin: 'bottom', delay:2000});
sr.reveal(`.one__blob`, {origin: 'left'});
sr.reveal(`.one__boxs__item__wrapper`, {origin: 'right', delay:500, duration:2000});
sr.reveal(`.arrow__1`, {origin: 'left', duration:2000, delay:1000});
sr.reveal(`.arrow__2`, {origin: 'right', duration:3000, delay:1500});
sr.reveal(`.header__shape--left`, {origin: 'left', delay:500, duration:2000});
sr.reveal(`.header__shape--right`, {origin: 'right', delay:500, duration:2000});
sr.reveal(`.header__girl`, {origin: 'top'}, {opacity:0}, {duration:2000});
sr.reveal(`.sheep__box`, {origin: 'top', delay: 1000, easing: 'ease'});
