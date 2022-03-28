//    owl-crousel for blog
$(document).ready(function(){

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

  AOS.init();

  
  $('#read-more1').click(function(){
    $('.more1').toggle('show');
  })

  $('#read-more2').click(function(){
    $('.more2').toggle('show');
  })

  $('#read-more3').click(function(){
    $('.more3').toggle('show');
  })

});



