
  $(document).ready(function(){
    $('.owl-carousel1').owlCarousel({
        loop:true,
        margin:10,
      autoplayTimeout: 5520,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  });
  $(document).ready(function(){
    $('.owl-carousel2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });


  