$(document).ready(function() {
    $(".letter").lettering();
  });

  let tl = gsap.timeline({repeat: 300, });
  tl.from(".logo" , {
    rotate : 360 ,
    duration : 3,
    
  })
  let tl2 = gsap.timeline({repeat: 300 , yoyo : true })
  tl2.to(".tomato" , {
    duration : 2,
    y : -20,
    scale : 1.5,
    ease : "elastic"
  })