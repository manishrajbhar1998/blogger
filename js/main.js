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

  
  // objective 1
  $('#read-more1').click(function(){
      let key = $('#read-more1').text();
      console.log(key);
      if(key == '.... Read more'){
        $('.more1').show(1000,function(){
          $('#read-more1').text('.... Read less')
        });
      }else{
        $('.more1').hide(1000,function(){
          $('#read-more1').text('.... Read more');
        });
      }
  });

  // objective 2
  $('#read-more2').click(function(){
    let key = $('#read-more2').text();
    console.log(key);
    if(key == '.... Read more'){
      $('.more2').show(1000,function(){
        $('#read-more2').text('.... Read less')
      });
    }else{
      $('.more2').hide(1000,function(){
        $('#read-more2').text('.... Read more');
      });
    }
});

// objective 3
$('#read-more3').click(function(){
  let key = $('#read-more3').text();
  console.log(key);
  if(key == '.... Read more'){
    $('.more3').show(1000,function(){
      $('#read-more3').text('.... Read less')
    });
  }else{
    $('.more3').hide(1000,function(){
      $('#read-more3').text('.... Read more');
    });
  }
});

  // $('#read-more1').click(function(){
  //     let key = $('#read-more1').text();
  //   $('.more1').toggle('show');
  // })

  // $('#read-more2').click(function(){
  //   $('.more2').toggle('show');
  // })

  // $('#read-more3').click(function(){
  //   $('.more3').toggle('show');
  // })

});



