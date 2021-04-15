 //LANDING PAGE ANIMATION

const scene = document.getElementById(`scene`); 
const parallaxInstance = new Parallax(scene); 

const keys = [
    "Mercury", 
    "Venus", 
    "Earth",
    "Mars", 
    "jupiter", 
    "Saturn", 
    "Uranus", 
    "Neptune",
]; 

let slider = new Swiper(" .swiper-container", {
  //Optional parameters
  slidesPerView: "auto", 
  spaceBetween: 150, 
  centeredSlides: true, 
  mousewheel: true,
  pagination: {
      el: "planet-links", 
      clicksble: true, 
      renderBullet: function(index, className) {
        return '<div class="' + className + '">' + keys[index] + "</div>";
      }
  }
});  

slider.on("slideChange", function() {
    console.log("SLIDE CHANGED");
    gsap.to(".slide-text span", 0.2, {
      x: "-100px"
    });
    gsap.to(".slide-number span", 0.2, {
      x: "-100px"
    });
    gsap.to(".slide-detail span", 0.5, {
      x: "-1000px"
    });
    gsap.to(".slide-detail-facts div", 0.5, {
      x: "-1000px"
    });
    gsap.to(".swiper-slide-active", 0.5, {
      scale: 0.85
    });
    gsap.to(".swiper-slide .slide-img", 1, {
      rotation: 20
    });
  });
slider.on("slideChangeTransitionEnd", function() {
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 10
  }); 
  
})

