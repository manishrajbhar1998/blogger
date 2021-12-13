 //    owl-crousel for blog



$(document).ready(function(){

  // $('.owl-carousel').owlCarousel({
  //   loop:true,
  //   autoplay:true,
  //   autoplayTimeout:3000,
  //   dots:false,
  //   nav:true,
  //   navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
  //   responsive: responsive
  // });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:2000,
    center:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});





// $(document).ready(function(){
//   //  $nav = $('.nav');
//   //  $toggleCollapse = $('.toggle-collapse')

//   //  click event on toggle menu
//   //  $toggleCollapse.click(function (){
//       //  alert('hello');
//       //  $nav.toggleClass('collapse');
//   //  })


//   // click to scrole top
//   $('.move-up span').click(function(){
//     $('html,body').animate({
//       scrollTop:0
//     },1000);
//   })

//   //  AOS Animation
//   AOS.init();



// });